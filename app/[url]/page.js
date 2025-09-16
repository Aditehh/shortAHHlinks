import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"
export default async function Page({ params }) {

    const client = await clientPromise;
    const db = client.db("shortahhlinks");
    const collection = db.collection("url");
    const { url } = await params
    return <div>My Post: {url}</div>
}