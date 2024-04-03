import { connectToDatabase } from "@/utils/databse";
import Meme from "@/models/MemeModel";

export async function POST(request){
    // get the data from the request
    const {tag, phrase} = await request.body;

    try {
         // connect to the database
    await connectToDatabase();

    // create a new meme
    const newMeme = new Meme({
        tag,
        phrase
    });

    // save the meme
    await newMeme.save();

    // send a response
    return new Response(JSON.stringify({message: 'Meme added successfully'}, {status: 200}))
        
    } catch (error) {
    return new Response(JSON.stringify({message: 'An error occurred while adding the meme', error: error}, {status: 500}))    
    }
}