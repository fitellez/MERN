const notesController = {};
const Note = require('../models/Note');

notesController.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
}

notesController.createNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new Note({
    title: title,
    content: content, 
    date: date, 
    author: author
  });
  await newNote.save();
  res.json({ message: 'Notes Saved' });
}

notesController.getNote = async (req, res) => {
  const id = req.params.id;
  const note = await Note.findById(id);
  res.json(note);
}

notesController.updateNote = async (req, res) => {
  const id = req.params.id;
  const { title, content, author } = req.body;
  await Note.findOneAndUpdate(id, {
    title: title,
    author: author,
    content: content
  });
  res.json({ message: 'Note Updated' }); 
}

notesController.deleteNote = async (req, res) => {
  const id = req.params.id;
  await Note.findOneAndDelete(id);
  res.json({ message: 'Note Deleted' });
}

module.exports = notesController;
