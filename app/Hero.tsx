'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';





export default function Hero(){

    
    return (
        <section className="w-full h-fit flex flex-col items-start gap-2">
            <Header/>
            <ImageShow />
        </section>
    )
};





function Header(){

    const [isCopied, setIsCopied] = useState(false);
    
    function copyCommand(){
        setIsCopied(true);
        copyToClipboard("pkg-installer")
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    return <div className='h-[40vh] flex flex-col gap-4 items-start justify-end p-6 '>
        
        <span className=" font-bold text-3xl md:text-6xl max-w-3xl tracking-tight -mt-2">
            Install Packages in one click, <p className='text-black/40'>directly inside any IDE.</p>  
        </span>
        <button onClick={() => copyCommand()} className='flex gap-4 items-center font-light text-lg p-1 border-b border-stone-400 select-auto'>
            <Image src='/search.gif' alt='search gif' width={20} height={20} />
            <span>
                Pkg-Installer
                <sup className='size-fit text-xs px-1.5 bg-black/10 rounded-full leading-none cursor-pointer'>
                    {isCopied ? 'copied' : 'copy'}
                </sup>
            </span>
        </button>
    </div> 
};


function ImageShow(){
    return <div className='relative w-full h-fit  '>
        <div className=" hidden md:flex badge z-80 absolute -top-24 right-6 max-sm:-top-16 max-sm:right-2">
            <p className='text-sm text-black/60 '>
                <Link target='_blank' href='https://open-vsx.org/extension/ShaniTiwari/Pkg-Installer'> 
                    <Image src='/text.png' alt='' width={240} height={240} className="max-sm:w-32" />
                    <Image className='rotate-90 absolute right-52 top-4 max-sm:right-24 max-sm:top-2 max-sm:w-12' src='/arrow.png' alt='' width={80} height={80} />
                </Link>
            </p>
        </div>
        <Image className=' object-cover rounded-xl outline-2 -outline-offset-2 outline-white' width={1200} height={800} src='/hero.png' alt='extension image' loading='eager' sizes="(max-width: 768px) 100vw, 50vw"
      style={{ width: '100%', height: 'auto' }} />
    </div>
};

const copyToClipboard = async (text: string) => {
    try {
        if (navigator?.clipboard?.writeText) {
            await navigator.clipboard.writeText(text);
        } 
    } catch (err) {
        console.error("Failed to copy command:", err);
    }
};