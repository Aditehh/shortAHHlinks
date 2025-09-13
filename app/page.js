import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-[86.7vh] flex flex-col items-center justify-center bg-gray-50 px-6">

      <section className="max-w-3xl w-full text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          The Best <span className="text-blue-600">URL Shortener</span>
        </h1>
        <p className="text-gray-600 mb-8">
          We are the best gift for humanity. Shorten your links, share them with ease,
          and track performance — all in one place.
        </p>

        {/* Input Box + Button */}  
        {/* <div className="flex items-center justify-center gap-2 mb-6">
          <input
            type="text"
            placeholder="Paste your long URL here..."
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Shorten
          </button>
        </div> */}

        {/* Features */}
        <ul className="space-y-3 text-left text-gray-700 bg-white p-6 rounded-xl shadow-sm">
          <li className="flex items-center gap-2">
            <span className="text-blue-600">✔</span> We are the best gift for humanity
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-600">✔</span> The most reliable URL shortener known to mankind
          </li>
        </ul>

        <div className="flex gap-5 justify-center">


          <div className="mt-10 ">
            <button className="cursor-pointer px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl shadow-md hover:from-blue-700 hover:to-indigo-700 transition-transform transform hover:scale-105">
               Try Now 
            </button>
          </div>


          <div className="mt-10 ">
            <button className="cursor-pointer px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl shadow-md hover:from-blue-700 hover:to-indigo-700 transition-transform transform hover:scale-105">
               🚀 Help Us Grow
            </button>
          </div>

        </div>

      </section>

    </main>
  );
}
