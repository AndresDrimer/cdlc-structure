import clientPromise from "./client";
import { ObjectId } from "mongodb";

let client;
let db;
let products;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db();
    products = await db.collection("products");
  } catch (error) {
    throw new Error("Failed to connect to the database.");
  }
}

(async () => {
  await init();
})();

////////////////
/// PRODUCTS ///
////////////////

export async function getAllProducts() {
  try {
    if (!products) await init();
    const result = await products
      .find({})
      .map((product) => ({ ...product, _id: product._id.toString() }))
      .sort({ title: -1 }) //si la tabla tuviera fecha de publicación seria bueno para el orden
      .toArray();
    return { products: result };
  } catch (error) {
    return { error: "Failed to fetch products!" };
  }
}

export async function getProductById(id) {
  try {
    if (!products) await init();
    const product = await products.findOne({ _id: new ObjectId(id) });
    if (!product) throw new Error();
    return { product: { ...product, _id: product._id.toString() } };
  } catch (error) {
    return { error: "Failed to get product!" };
  }
}

//bring products of same collection than Id, excluding that same Id
export async function getSameGenre(genreSelected, id) {
  try {
    if (!products) await init();
    const result = await products
      .find({ genre: genreSelected, _id: { $ne: new ObjectId(id) } })
      .map((product) => ({ ...product, _id: product._id.toString() }))
      .toArray();
    return { sameGenreProducts: result };
  } catch (error) {
    return { error: "Failed to fetch products!" };
  }
}

//necesitaria un metodo para cambiar cuando muestra por Id, del digital al fisico. Enr ealidad eso es llamr simplemente al mismo metodo pero con el id de la verison fisica, eso info no esta cruzada, estaria bueno tenerla


//////////////////////////////
//methods for admin only/////
/////////////////////////////

//method still has some problem with new field as it is a reserved word
export async function createProduct(newProduct) {
  try {
    if (!products) await init();

    return await products.insertOne({...newProduct, new: newProduct.new_});
  } catch (error) {
    return { error: "Failed to create product!" };
  }
}


//method to delete one by id
export async function deleteProduct(id) {
  try {
    if (!products) await init();
    
    const result = await products
      .deleteOne({_id: new ObjectId(id)})
      .map((product) => ({ ...product, _id: product._id.toString() }))
      .toArray();
return { products: result };
} catch (error) {
    return { error: "Failed to fetch products!" };
  }
}

//method to update
export async function editProduct(id, newProduct) {
  try {
    if (!products) await init();
    
    const result = await products
      .findByIdAndUpdate({_id: new ObjectId(id)}, {$set: {...newProduct}})
      .map((product) => ({ ...product, _id: product._id.toString() }))
      .toArray();
return { products: result };
} catch (error) {
    return { error: "Failed to fetch products!" };
  }

}

/////////////////////////////
//////autocomplete search///
////////////////////////////

export async function searchAuto(query) {
  try {
    if (!products) await init();
    const result = await products
    .aggregate([
      {
        $search: {
          index: "default",
          compound: {
            must: [
              {
                text: {
                  query: query,
                  path: "title",
                  fuzzy: {
                    maxEdits: 1,
                  },
                },
              },
            ],
          },
        },
      },
      {
        $limit: 10,
      },
      {
        $project: {
          author: 1,
          title: 1,
          _id:1,
          score: {$meta: "resultadosBusqueda"},
        },
      }
    ])
      .toArray();
    return { products: result };
  } catch (error) {
    return { error: "Failed to fetch products!" };
  }
  
}