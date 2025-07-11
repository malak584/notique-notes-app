import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon } from "lucide-react";

function NoteDetailPage() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

 useEffect(() => {
  const fetchNote = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/notes/get");

      // Find the note with the matching ID
      const note = res.data.find((note) => note._id === id); 

      // If the note exists, set title and content
      if (note) {
        setTitle(note.title);
        setContent(note.content);
      } else {
        toast.error("Note not found");
      }
    } catch (error) {
      toast.error("Failed to load note");
      console.error("Error fetching note:", error);
    }
  };

  fetchNote();
}, [id]);

  // ✅ Handle note update
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.put(`http://localhost:5000/api/notes/update/${id}`, {
        title,
        content,
      });

      if (res.data.success) {
        toast.success("Note updated successfully"); 
        setTimeout(() => navigate("/"), 1000);
      }
    } catch (err) {
      setError(err.message);
      toast.error("Failed to update note");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle note delete
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      const res = await axios.delete(`http://localhost:5000/api/notes/delete/${id}`);
      if (res.data.success) {
        toast.success("Note deleted");
        navigate("/");
      }
    } catch (err) {
      toast.error("Failed to delete note");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5efe4] text-gray-800 font-sans">
      {/* Back Link */}
      <header className="flex font-serif items-center gap-2 bg-[#e9e3dc] p-6">
        <Link
          to="/"
          className="flex items-center gap-1 text-lg hover:underline"
        >
          <ArrowLeftIcon size={20} /> Back to Notes
        </Link>
      </header>

      {/* Form */}
      <main className="flex justify-center py-12">
        <form
          onSubmit={handleUpdate}
          className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-10"
        >
          <h1 className="font-serif text-3xl mb-6">Edit Note</h1>

          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-[#f5efe4] rounded-full py-3 px-5 border border-[#d4d1cd] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7c90ff] mb-6"
            required
          />

          <label className="block text-sm font-medium mb-1">Content</label>
          <textarea
            placeholder="Write your note here…"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-40 resize-none bg-[#f5efe4] rounded-2xl py-3 px-5 border border-[#d4d1cd] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7c90ff] mb-8"
          />

          {/* Save & Delete Buttons */}
          <div className="flex justify-between">
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white font-semibold px-6 py-3 rounded-full transition hover:bg-[#e2e2e2] disabled:opacity-50"
            >
              {loading ? "Saving…" : "Save Changes"}
            </button>

            <button
              type="button"
              onClick={handleDelete}
              className="text-red-600 hover:underline"
            >
              Delete Note
            </button>
          </div>

          {error && <p className="text-red-600 mt-4">{error}</p>}
        </form>
      </main>
    </div>
  );
}

export default NoteDetailPage;
