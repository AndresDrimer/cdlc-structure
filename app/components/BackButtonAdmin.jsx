import Link from 'next/link'
import { IoChevronBackOutline } from 'react-icons/io5'

function BackButton() {
  return (
      <div className="">
        <Link href="/admin">
          <button className="flex items-center ml-4 cursor-pointer text-gray-500 hover:text-black mt-2 text-xs"> 
            <IoChevronBackOutline className="inline" />
            volver
          </button>
        </Link>
      </div>
  )
}

export default BackButton