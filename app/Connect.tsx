import Link from "next/link";


export default function Connect(){
    return <section className="w-full p-6 flex flex-col gap-2 my-6">
        <p className="text-center w-full text-xl md:text-2xl font-bold ">
            Tell me which package you need in it.
        </p>
        <div className="socials flex gap-4 justify-center">
            <Link className="underline underline-offset-2" href='https://x.com/shanidevelops'>Twitter</Link>
            <Link className="underline underline-offset-2" href='https://linkedin.com/in/shani-tiwarii'>LinkedIn</Link>
            <Link className="underline underline-offset-2" href='https://instagram.com/shani.develops'>Instagram</Link>
        </div>
    </section>
}