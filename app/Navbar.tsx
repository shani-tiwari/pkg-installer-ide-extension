import Link from 'next/link';
import Image from 'next/image';


export default function Navbar(){
    return (
        <nav className="z-99 sticky top-2 w-full bg-white py-2 px-2 md:px-6 flex items-center justify-between border-b border-stone-400">
            <div className='absolute  -top-2 left-0 h-2 w-full bg-white'></div>
            {/* <div className='absolute rounded-full -bottom-4 left-0 h-6 w-full bg-linear-to-b from-white/60 to-white backdrop-blur-lg'></div> */}
            <div className="name flex gap-2 items-center font-bold tracking-normal">
                <div className="logo">
                    <Image src='/logo.png' alt='logo' width={30} height={30} />
                </div>
                <p>Pkg-Installer</p>
            </div>
            <div className="connect">
                <LinkTo link='https://github.com/shani-tiwari/pkg-installer-ide-extension' label='Star on Github' /> 
            </div>
        </nav>
    )
};

interface linkProps { 
    link: string,
    label: string 
};

function LinkTo({link, label}: linkProps){  
    return <Link href={link} target='_blank'>
        {label}
    </Link>
}