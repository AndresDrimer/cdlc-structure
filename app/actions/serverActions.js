"use server";

import { createProduct, deleteProduct, editProduct, searchAuto } from "@/lib/mongo/products";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



export async function autoComp(query) {
  await searchAuto(query)
  
}

export async function delProduct(id) {
  await deleteProduct(id);
  console.log("ahora sí, borrado", id);
  revalidatePath("/admin/list");
}


export const updateProduct = async (e, id) => {
  
  const codeDUX = e.get("codeDUX");
  const ISBN = e.get("ISBN")?.toString();
  const genre = e.get("genre")?.toString();
  const title = e.get("title").toString();
  const author = e.get("author").toString();
  const urlIntl = e.get("urlIntl").toString();
  const urlLocal = e.get("urlLocal").toString();
  const colorCode = e.get("colorCode").toString();
  const techSpecs = e.get("techSpecs").toString();
  const authorSpecs = e.get("authorSpecs").toString();
  const review = e.get("review").toString();
  const deprecated = e.get("deprecated") === "on" ? true : false;
  const show = e.get("show") === "on" ? true : false;
  const digital = e.get("digital") === "on" ? true : false;
  const combo = e.get("combo") === "on" ? true : false;
  const highlighted = e.get("highlighted") === "on" ? true : false;
  const new_ = e.get("new") === "on" ? true : false;
  const isColeccion = e.get("isColeccion") === "on" ? true : false;
  const isCombo = e.get("isCombo") === "on" ? true : false;
  const containsDUXCode = e.get("containsDUXCode").toString();
  const stock = e.get("stock");
  const discountPercentage = e.get("discountPercentage");
  const priceTN = e.get("priceTN");
  const priceML = e.get("priceML");
  const priceUS = e.get("priceUS");
  const kg = e.get("kg");
  const x = e.get("x");
  const y = e.get("y");
  const z = e.get("z");
  const imgFront = "https://drive.google.com/uc?export=view&id=" + e.get("imgFront").toString();
  const imgBack = "https://drive.google.com/uc?export=view&id=" + e.get("imgBack").toString();
  const urlGoogleDoc = e.get("urlGoogleDoc").toString();
  const key = e.get("key").toString();

  const newProduct = {
    codeDUX,
    ISBN,
    genre,
    title,
    author,
    urlIntl,
    urlLocal,
    colorCode,
    techSpecs,
    authorSpecs,
    review,
    deprecated,
    show,
    digital,
    combo,
    highlighted,
    new_,
    isColeccion,
    isCombo,
    containsDUXCode,
    stock,
    discountPercentage,
    priceTN,
    priceML,
    priceUS,
    kg,
    x,
    y,
    z,
    imgFront,
    imgBack,
    urlGoogleDoc,
    key,
  };

  if (!newProduct) return;
  await editProduct(id, newProduct)
 console.log("actualizado el producto cuya id es: ", id);
  // como hago aca router.push("/admin/list")????
  redirect('/admin/list');
 
}
export const addProduct = async (e) => {
  const codeDUX = e.get("codeDUX").toString();
  const ISBN = e.get("ISBN")?.toString();
  const genre = e.get("genre")?.toString();
  const title = e.get("title").toString();
  const author = e.get("author").toString();
  const urlIntl = e.get("urlIntl").toString();
  const urlLocal = e.get("urlLocal").toString();
  const colorCode = e.get("colorCode").toString();
  const techSpecs = e.get("techSpecs").toString();
  const authorSpecs = e.get("authorSpecs").toString();
  const review = e.get("review").toString();
  const deprecated = e.get("deprecated")
  const show = e.get("show")
  const digital = e.get("digital")
  const combo = e.get("combo")
  const highlighted = e.get("highlighted")
  const new_ = e.get("new")
  const isColeccion = e.get("isColeccion")
  const isCombo = e.get("isCombo")
  const containsDUXCode = e.get("containsDUXCode").toString();
  const stock = e.get("stock");
  const discountPercentage = e.get("discountPercentage");
  const priceTN = e.get("priceTN");
  const priceML = e.get("priceML");
  const priceUS = e.get("priceUS");
  const kg = e.get("kg");
  const x = e.get("x");
  const y = e.get("y");
  const z = e.get("z");
  const imgFront = "https://drive.google.com/uc?export=view&id=" + e.get("imgFront").toString();
  const imgBack = "https://drive.google.com/uc?export=view&id=" + e.get("imgBack").toString();
  const urlGoogleDoc = e.get("urlGoogleDoc").toString();
  const key = e.get("key").toString();

  const newProduct = {
    codeDUX,
    ISBN,
    genre,
    title,
    author,
    urlIntl,
    urlLocal,
    colorCode,
    techSpecs,
    authorSpecs,
    review,
    deprecated,
    show,
    digital,
    combo,
    highlighted,
    new_,
    isColeccion,
    isCombo,
    containsDUXCode,
    stock,
    discountPercentage,
    priceTN,
    priceML,
    priceUS,
    kg,
    x,
    y,
    z,
    imgFront,
    imgBack,
    urlGoogleDoc,
    key,
  };

  if (!newProduct) return;
  createProduct(newProduct);
  console.log("done");
  redirect('/admin/list');
};


