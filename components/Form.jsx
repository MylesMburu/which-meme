import {useState, useEffect} from 'react'

export const Form = () => {

  const [tag, setTag] = useState('');
  const [phrase, setPhrase] = useState('');

  const addMeme = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/memes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({tag, phrase}),
    });

    const data = await res.json();
    console.log(data);
  }


  return (
    <div>
        <form className='flex flex-col gap-4'>
            <input
             type="text" 
             placeholder="Tag" 
             className='p-2 rounded-lg'
             value={tag}
             onChange={(e) => setTag(e.target.value)}
             />

            <input 
            type="text" 
            placeholder="Phrase" 
            className='p-2 rounded-lg'
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}  
            />
            <button 
            className='bg-black text-white p-2 rounded-lg'
            onClick={(e) =>{}}
            >
                Add
            </button>
        </form>
    </div>
  )
}
