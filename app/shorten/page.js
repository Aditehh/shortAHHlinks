"use client"
import React from 'react'
import { useState } from 'react'






const handlechange = () => {

}

const page = () => {
    const [url, seturl] = useState("")
    const [shortUrl, setshortUrl] = useState("")
    const [generated, setgenerated] = useState(false)
    return (
        <div className='min-h-[86.7vh] flex flex-col items-center justify-center bg-gray-50 px-6'>
            <div >

                <div className='my-10 text-4xl font-extraboldbold'>
                    Generate your <span className='text-blue-600 '>shortAHHlinks</span> down below
                </div>
                {/* Input Box + Button  */}
                <div className="flex items-center justify-center gap-3 mb-6">
                    <input
                        type="text"
                        placeholder="Paste your long URL here..."
                        onChange={handlechange}
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />



                </div>

                <div className="flex items-center justify-center gap-3 mb-6">
                    <input
                        type="text"
                        onChange={handlechange}
                        placeholder="Enter the URL name"
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Shorten
                    </button>


                </div>

            </div>

        </div>
    )
}

export default page
