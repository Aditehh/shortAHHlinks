// go up 2 levels because route.js is in app/api/generate
import clientPromise from "../../../lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.url || !body.shortUrl) {
      return new Response(
        JSON.stringify({ error: "Both url and shortUrl are required" }),
        { status: 400 }
      );
    }

    const client    = await clientPromise;
    const db = client.db("shortahhlinks");
    const collection = db.collection("url");

    const result = await collection.insertOne({
      url: body.url,
      shortUrl: body.shortUrl,
    //   createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({
        message: "URL saved successfully",
        // insertedId: result.insertedId,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in POST /api/generate:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
