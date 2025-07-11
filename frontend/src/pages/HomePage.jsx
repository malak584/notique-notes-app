import Navbar from '../components/Navbar';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';
function HomePage() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await Axios.get('http://localhost:5000/api/notes/get')
      setNotes(response.data);
    } catch (error) {
      setError(error.message);
      toast.error('Failed to fetch notes');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchNotes();
  }, []);


  return <div className="min-h-screen bg-[#f2e9dc]">
    <Navbar />
    <div className='container mx-auto mt-10 p-4  '>
      {loading && <p className='text-center text-gray-500 font-ebgaramond'>Loading...</p>}
    </div>
    {notes.length > 0 ? (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8'>
        {notes.map(note => (
          <NoteCard key={note._id} note={note} setNotes={setNotes} />
        ))}
      </div>
    ) : (
      <p className='text-center text-gray-500 font-ebgaramond'>No notes found.</p>
    )}
  </div>
}
export default HomePage;