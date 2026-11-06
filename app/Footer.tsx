import Link from 'next/link';

export default function Footer(){
    return <footer className=' px-6 py-4 flex items-center justify-between border-t border-stone-400 text-black/80'>
        <p className='text-sm md:text-base'>
            Pkg-Installer © 2026. 
        </p>
      <Link target='_blank' href='https://shaniweb.com' className='underline underline-offset-2 hover:text-black'>Shani Tiwari</Link>   
    </footer>
}