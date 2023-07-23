import { URL_PDF, urlPdfViewer } from "@/constants/constant"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"

export default async function User({params}: {params: Params}) {
  
    const base_url= "https://docs.google.com/feeds/download/documents/Export?exportFormat=pdf&format=pdf&id=<id>"
    const unaKey = "1DPkc_l0eu9wECSH4mEqKbQrWbDtkh3kbao9S0eYNhX8"
    
    const prueba = `https://docs.google.com/feeds/download/documents/Export?exportFormat=pdf&format=pdf&id=${unaKey}`
    
    
    const URL_PDF = "https://ohansemmanuel.github.io/assets/pdf/understanding-flexbox.pdf"
    const url = "https://docs.google.com/viewer?embedded=true&url=https://ohansemmanuel.github.io/assets/pdf/understanding-flexbox.pdf"

const url2 = `https://docs.google.com/viewer?embedded=true&url=${URL_PDF}`




    const response = await fetch(prueba)
    console.log(response)
    urlPdfViewer + URL_PDF


    const id = params.id
return (
    <div>{id}
       <iframe src={url2} className="w-full h-screen"></iframe>
       
        
        </div>
  )
}


