interface Product {
    _id: string
    codeDUX: string | undefined
    ISBN: string | undefined
    genre: string | undefined
    colorCode: string | undefined
    title: string
    author: string | undefined
    ProdUrl: string	
    techSpecs: string | undefined	
    authorSpecs: string | undefined	
    review: string | undefined
    deprecated: boolean
    show: boolean
    digital: boolean
    combo: boolean
    highlighted: boolean
    new: boolean
    contains: string | undefined
    stock: number | null
    discountPercentage: number | null
    priceTN: number | null
    priceML: number | null
    priceUS: number | null
    kg: number | null
    x: number | null
    y: number | null
    z: number | null
    imgFront: string | undefined 
    imgBack: string | undefined
}
