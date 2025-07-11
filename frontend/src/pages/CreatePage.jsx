import { useEffect,useState } from "react";
import toast from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";


function CreatePage() {
  const [title , setTitle]= useState("");
  const [content , setContent]= useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const navigate = useNavigate();

  const handleSubmit = async (e)=> {
    e.preventDefault();
    setLoading(true);
    try{
      const response = await axios.post("http://localhost:5000/api/notes/create", {
        title,
        content,
      });if (response.data.success) {
        console.log(response.data);
        toast.success("Note created successfully");
        setTitle("");
        setContent("");
        setTimeout(() => {
    navigate("/");
  }, 1000);
    }     
      } catch (error) {
        setError(error.message);
        toast.error("Failed to create note");
      } finally {
        setLoading(false);
      }
       
  }
  return (
    // page wrapper ── matches the beige canvas of the board
    <div className="min-h-screen bg-[#f5efe4] text-gray-800 font-sans">
      {/* top bar with back link */}
      <header className="flex font-serif items-center gap-2 bg-[#e9e3dc] p-6">
        <Link
          to="/"
          className="flex items-center gap-1 text-lg hover:underline"
        >
          <ArrowLeftIcon size={20} /> Back to Notes
        </Link>
      </header>

      {/* centred form card */}
      <main className="flex justify-center py-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-10"
        >
          <h1 className="font-serif text-3xl mb-6">Create New Note</h1>

          {/* Title field */}
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-[#f5efe4] rounded-full py-3 px-5 border border-[#d4d1cd] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7c90ff] mb-6"
            required
          />

          {/* Content field */}
          <label className="block text-sm font-medium mb-1">Content</label>
          <textarea
            placeholder="Write your note here…"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-40 resize-none bg-[#f5efe4] rounded-2xl py-3 px-5 border border-[#d4d1cd] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7c90ff] mb-8"
          />

          {/* action bar */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white font-semibold px-8 py-3 rounded-full transition hover:bg-[#e2e2e2] disabled:opacity-50"
            >
              {loading ? "Creating…" : "Create Note"}
            </button>
          </div>

          {error && <p className="text-red-600 mt-4">{error}</p>}
        </form>
      </main>
    </div>
  );
}
export default CreatePage;