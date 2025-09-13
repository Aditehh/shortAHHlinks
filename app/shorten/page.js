import React from 'react'

const page = () => {
    return (
        <div className='min-h-[86.7vh] flex flex-col items-center justify-center bg-gray-50 px-6'>

            {/* Input Box + Button  */}
            <div className="flex items-center justify-center gap-2 mb-6">
                <input
                    type="text"
                    placeholder="Paste your long URL here..."
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                />
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Shorten
                </button>


            </div>

            {/* Features */}

        </div>
    )
}

export default page
