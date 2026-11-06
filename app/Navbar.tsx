import Link from 'next/link';
import Image from 'next/image';


export default function Navbar(){
    return (
        <nav className=" sticky top-2 w-full py-2 px-6 flex items-center justify-between rounded-2xl border border-stone-400">
            <div className="name flex gap-2 items-center">
                <div className="logo">
                    <Image src='/logo.png' alt='logo' width={30} height={30} />
                </div>
                Pkg-Installer
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