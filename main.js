import express from "express";
const app=express();
const port=3000
app.get('/',(req,res)=>{
   res.json({
       message:"hello world"
   });

});
// CRUD functionality of movies

//R -  For Reading
app.get('/movies',()=>{

});

//C -  For Creating

app.post('/movies',()=>{

});

//U -  For Updating

app.put('/movies/:id',()=>{

});

//D -  For Deleting
app.delete('/movies/:id',()=>{
    
});

app.listen(port,()=>{{
    console.log(`The server is running at http://localhost:${port}`);
}})