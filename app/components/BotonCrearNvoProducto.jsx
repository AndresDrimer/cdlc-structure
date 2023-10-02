"use client"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BotonCrearNvoProducto() {
    const notify = () => toast("Wow so easy!");
  return (
    <>
   <button onClick={notify}>crear desde componenet</button>
   <ToastContainer /></>
  )
}

export default BotonCrearNvoProducto