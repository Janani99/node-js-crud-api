import express from "express";
import { MovieCreate, MovieDelete, MovieIndex, MovieUpdate,MovieDetails } from "../controllers/movies.controller.js";
const router=express.Router();

// CRUD functionality of movies

//R -  For Reading
router.get('/',MovieIndex);


router.get("/:id", MovieDetails);

//C -  For Creating

router.post('/', MovieCreate);

//U -  For Updating

router.put('/:id', MovieUpdate);

//D -  For Deleting
router.delete('/:id', MovieDelete);

export default router;