import express from 'express';
import { createNote, deleteNote, getAllNotes, updateNote } from '../controllers/NotesController.js';
const router = express.Router();


router.get("/get", getAllNotes);
router.post("/create",createNote);
router.put("/update/:id", updateNote);
router.delete("/delete/:id", deleteNote);

export default router;
