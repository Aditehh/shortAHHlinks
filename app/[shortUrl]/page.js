// import { redirect } from "next/navigation"
// import clientPromise from "@/lib/mongodb"
// export default async function Page({ params }) {

//     const client = await clientPromise;
//     const db = client.db("shortahhlinks");
//     const collection = db.collection("url");
//     const { shortUrl } = (await params).shortUrl


//     const doc = await collection.findOne({shortUrl: url})
//     if (doc) {
//         redirect(doc.url)
//     }
//     else{
//         redirect(`${NEXT_PUBLIC_HOST}`)
//     }


//     return <div>My Post: {url}</div>
// }

import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const { shortUrl } = params; // ✅ correct way

  const client = await clientPromise;
  const db = client.db("shortahhlinks");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shortUrl }); // ✅ fixed

  if (doc) {
    redirect(doc.url); // ✅ working redirect
  } else {
    redirect(process.env.NEXT_PUBLIC_HOST); // ✅ correct env usage
  }
}
