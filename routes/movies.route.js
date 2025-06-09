import express from "express";
const router=express.Router();

// CRUD functionality of movies

//R -  For Reading
router.get('/',(req,res)=>{
    res.send("Get all the movies list")


});

//C -  For Creating

router.post('/',(req,res)=>{
    res.send("Creating a movie")

});

//U -  For Updating

router.put('/:id',(req,res)=>{
res.send("Updating a movie");
});

//D -  For Deleting
router.delete('/:id',(req,res)=>{
    res.send("Deleting a movie");
    
});

export default router;