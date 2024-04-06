import { connectToDatabase } from "@/utils/databse";
import Meme from "@/models/MemeModel";
import multer from 'multer';
import { NextResponse } from "next/server";

// Set up multer (configure storage, file filters, etc. as needed)
const upload = multer({ dest: 'uploads/' }); // 'uploads/' is the folder where files will be saved

export async function POST(request){

    try {
        // connect to the database
        await connectToDatabase();

        // multer to handles the incoming file
        // Note: The field name 'thumbnail' must match the name used in the FormData on the frontend
        upload.single('thumbnail')(request, null, async (err) => {
            if (err) {
                // handle multer errors here, e.g., file too large, incorrect format, etc.
                return NextResponse.json({ message: 'Error processing thumbnail', error: err }, { status: 500 });
            }

            // request.file contains the thumbnail file
            // and request.body contains the other form fields (tag, phrase)

            // create a new meme
            const newMeme = new Meme({
                tag: request.body.tag,
                phrase: request.body.phrase,
                thumbnail: request.file.path 
            });

            // save the meme
            await newMeme.save();

            // send a response
            return NextResponse.json({ message: 'Meme added successfully' }, { status: 200 });
        });
        
    } catch (error) {
        return NextResponse.json({ message: 'An error occurred while adding the meme', error: error }, { status: 500 });
    }
}
