// components/MemeFeed.js
import Image from 'next/image'

import memes from '@/utils/dummy'

export default function MemeFeed() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-5 gap-4 p-4'>
      {memes.map(meme => (
        <div key={meme.id} className='card bg-white p-4 rounded-lg shadow-lg'>
          <div className='mb-2'>
            <Image src={meme.thumbnail} alt={meme.phrase} width={200} height={200} className='rounded-lg'/>
          </div>
          <div className='text-gray-700'>
            <div className='text-sm font-semibold'>{meme.tag}</div>
            <div className='text-md'>{meme.phrase}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
