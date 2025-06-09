import express from "express";
import movieRoute from "./routes/movies.route.js";
const app=express();
const port=3000
app.get('/',(req,res)=>{
   res.json({
       message:"hello world"
   });

});
// CRUD functionality of movies
// CLIENT -----> MIDDLEWARE ----> SERVER

app.use('/movies',movieRoute);

app.listen(port,()=>{{
    console.log(`The server is running at http://localhost:${port}`);
}})