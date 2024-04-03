import { Nav } from '@/components/Nav';
import Feed from '@/components/Feed';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div >
      <Nav/>

      <div className='gradient text-white center-div flex-col gap-4 min-h-screen pt-32'>
        
        <div className='text-center my-8 px-2'>
        <h1 className='text-2xl font-bold'>If you know it, then it's probably here</h1>
        <p>As long as you know a popular phrase from the meme, we'll get it for you!</p>
        </div>

        <div className='flex gap-4 mb-8'>
          <input type="text" placeholder="Search for a meme" className='p-2 rounded-lg'/>
          <button className='bg-white text-black p-2 rounded-lg'>Search</button>
        </div>
        
        
        <Feed/>
      </div>

      <Footer/>
    </div>
  )
}
