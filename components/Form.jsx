'use client';

import { useState } from 'react';
import axios from 'axios';

export const Form = () => {
  const [tag, setTag] = useState('');
  const [phrase, setPhrase] = useState('');
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const addMeme = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('thumbnail', file);
    formData.append('tag', tag);
    formData.append('phrase', phrase);

    setIsLoading(true);

    try {
      const response = await axios.post('/api/new-meme', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      alert('Meme added successfully');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center font-semibold text-2xl mb-4">Add New Meme</h1>
      <form onSubmit={addMeme} className="flex flex-col items-center gap-2">
        <input
          type="text"
          placeholder="Tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="p-2 rounded-lg border-2 focus:outline-none focus:ring-2"
        />
        <input
          type="text"
          placeholder="Phrase"
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
          className="p-2 rounded-lg border-2 focus:outline-none focus:ring-2"
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="p-2 rounded-lg"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-black text-white p-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2"
        >
          {isLoading ? 'Adding...' : 'Add'}
        </button>
      </form>
    </div>
  );
};
