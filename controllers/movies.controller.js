import { Movie } from "../models/movie.mode.js";

export const MovieIndex = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: err.message });
    }
    //res.send("Get all the movies list")
}

export const MovieCreate = async (req, res) => {
    //id , title ,description
    console.log(req.body);


    //validate your data 
    const newMovie = new Movie({
        title: req.body.title,
        description: req.body.description

    });
    try {
        const movie = await newMovie.save();
        return res.status(201).json(movie);
        // console.log(movie);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: err.message });

    }


    //res.send("Creating a movie") 

}
export const MovieDetails=async(req,res)=>{
    try {
        const movie = await Movie.findById(req.params.id);
        if (movie === null) {
            return res.status(404).json({ message: "Cannot find movie" });
        }
        else {
            res.json(movie);
        }

    } catch (err) {
return res.status(500).json({ message: err.message });
    }
}

export const MovieUpdate = async (req, res) => {
try{
   const result = await Movie.findOneAndUpdate({_id:req.params.id}, { title: req.body.title, description: req.body.description },{new:true});
   res.status(200).json(result);
}catch(err){
    res.status(400).json({ message: err.message });

}

}

export const MovieDelete = async(req, res) => {
const movieId=req.params.id;
// const foundMovie=Movie.findOne({_id:movieId});
try{
    await Movie.deleteOne({_id:movieId});
    res.json({message:"Deleted a movie"}); 
}
catch(err){
    res.status(400).json({ message: err.message });
}
   // res.send("Deleting a movie");


}