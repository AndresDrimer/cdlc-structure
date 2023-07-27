import clientPromise from "./client"
import { ObjectId } from 'mongodb'

let client
let db
let products

async function init() {
  if (db) return
  try {
    client = await clientPromise
    db = await client.db()
    products = await db.collection('products')
  } catch (error) {
    throw new Error('Failed to connect to the database.')
  }
}

;(async () => {
  await init()
})()

////////////////
/// PRODUCTS ///
////////////////

//brings every product available
export async function getAllProducts() {
  try {
    if (!products) await init()
    const result = await products
      .find({})
      .map(product => ({ ...product, _id: product._id.toString() }))
      .sort({title: -1}) //ordenar por fecha de salida
      .toArray()
    return { products: result }
  } catch (error) {
    return { error: 'Failed to fetch products!' }
  }
}

//filter products that belongs to genre: "colecciones", to show in Catalogo Row
export async function getAllProductsCleaned() {
  try {
    if (!products) await init()
    const result = await products
      .find({show: true, genre: {$ne: "coleccion"}})
      .map(product => ({ ...product, _id: product._id.toString() }))
      .sort({title: 1}) //ordenar por fecha de salida
      .toArray()
    return { products: result }
  } catch (error) {
    return { error: 'Failed to fetch products!' }
  }
}

//brings product by Id
export async function getProductById(id) {
  try {
    if (!products) await init()
    const product = await products.findOne({ _id: new ObjectId(id) })
    if (!product) throw new Error()
    return { product: { ...product, _id: product._id.toString() } }
  } catch (error) {
    return { error: 'Failed to get product!' }
  }
}


//filter whats is not marked as highlighted, to show on Destacados Row
export async function getHighlightedProducts() {
  try {
    if (!products) await init()
    const result = await products
      .find({ highlighted: true})
      .sort({"title":-1})
      .map(product => ({ ...product, _id: product._id.toString() }))
      .toArray()
      
    return { highlightedProducts: result }
  } catch (error) {
    return { error: 'Failed to fetch products!' }
  }
}

//bring products of same collection than Id, excluding that same Id
//aca deberia establecer que si products.lenght<3 entonces suma genre: ensayos, barrios y el otro que tiene uno solo
export async function getSameGenre(genreSelected, id) {
  try {
    if (!products) await init()
    const result = await products
      .find({ genre: genreSelected, _id: {$ne: new ObjectId(id)}})
      .map(product => ({ ...product, _id: product._id.toString() }))
      .toArray()
    return { sameGenreProducts: result }
  } catch (error) {
    return { error: 'Failed to fetch products!' }
  }
}

//necesitaria un metodo para cambiar cuando muestra por Id, del digital al fisico. Enr ealidad eso es llamr simplemente al mismo metodo pero con el id de la verison fisica, eso info no esta cruzada, estaria bueno tenerla

//methods for admin only
export async function createProduct(title) {
  try {
    if (!products) await init()

    return await products.insertOne({ title, isCompleted: false })
  } catch (error) {
    return { error: 'Failed to create todo!' }
  }
}

export async function deleteProduct(id) {}

export async function editProduct(id) {}