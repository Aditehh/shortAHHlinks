"use client"
import React from 'react'
import { useState } from 'react'




const page = () => {

    const [url, seturl] = useState("")
    const [shortUrl, setshortUrl] = useState("")
    const [generated, setgenerated] = useState("")

    const shorten = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shortUrl": shortUrl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                seturl("")
                setshortUrl("")
                setgenerated(`${process.env.NEXT_HOST}/${shortUrl}`)
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }


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
                        value={url}
                        placeholder="Paste your long URL here..."
                        onChange={e => { seturl(e.target.value) }}
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />



                </div>

                <div className="flex items-center justify-center gap-3 mb-6">
                    <input
                        type="text"
                        value={shortUrl}
                        onChange={e => { setshortUrl(e.target.value) }}
                        placeholder="Enter the URL name"
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                    <button
                        onClick={shorten}
                        className=" cursor-pointer px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Shorten
                    </button>


                </div>

            </div>

        </div>
    )
}

export default page
