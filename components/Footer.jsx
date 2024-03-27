import { FaGithub } from "react-icons/fa";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className='center-div flex-col gap-2 bg-gray-800 text-white p-4 text-center'>
      <p>&copy; {new Date().getFullYear()} WhichMeme</p>
      <Link href="https://github.com/MylesMburu/which-meme" target="_blank">
            <FaGithub />
      </Link>
    </footer>
  )
}