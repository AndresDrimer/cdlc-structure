 
import { AdminContextProvider } from "@/app/contexts/adminContext"


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
 
      <AdminContextProvider>
        {children}
       </AdminContextProvider>
      
  )
}
