import Note from "../models/noteModel.js";


export async function getAllNotes(req, res) {
  try { 
    const notes = await Note.find();
    res.status(200).json(notes);  
  }
  catch (error) {
    res.status(500).json({ message: "Error fetching notes", error: error.message });
  }
}


export  async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).json({ success: true, note: newNote });
  } catch (error) {
    res.status(500).json({ message: "Error creating note", error: error.message });
  }
}

export async function updateNote(req, res) {
 try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({success : true , note : updatedNote });
  } catch (error) { 
    res.status(500).json({ message: "Error updating note", error: error.message });
  }


}
export async function deleteNote(req, res) {
  try {
    const { id } = req.params;
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ success: true, note: deletedNote  });
  } catch (error) {
    res.status(500).json({ message: "Error deleting note", error: error.message });
  } 

}
