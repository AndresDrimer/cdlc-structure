interface Product {
    _id: string
    codeDUX: string 
    ISBN?: string 
    genre: "urbanidad" | "hábitat" | "ciudades" | "movilidad" | "territorio" | "no-genre" | "combo" | "coleccion" | "planeamiento" | "cultura" | "barrios" | "ensayos"
    title: string
    author: string 
    urlIntl: string 
    urlLocal: string 
    colorCode?: string
    techSpecs?: string 
    authorSpecs?: string 	
    review?: string 
    deprecated: boolean
    show: boolean
    digital: boolean
    combo: boolean
    highlighted: boolean
    new: boolean
    isColeccion: boolean
    isCombo: boolean
    containsDUXCode?: string 
    contains?: string 
    stock?: number
    discountPercentage?: number 
    priceTN?: number
    priceML?: number
    priceUS?: number
    kg?: number
    x?: number
    y?: number
    z?: number
    imgFront: string  
    imgBack?: string
    urlGoogleDoc?: string
    key?: string
}



