import { Schema,model } from "mongoose";
const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
         
    }
});


// create the model
export const Movie = model('movie', movieSchema);