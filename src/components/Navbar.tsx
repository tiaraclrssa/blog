import Image from "next/image";
import Link from "next/link";

export default function Navbar (){
    return(
        <div className="text-black bg-gray-300 H-[30px] sticky top-0">
            <nav>
                    <Link href={"/"}></Link>
                    <div className="flex flex-row">
                    <Image src="/logo.png"alt="logo blogger" width={100} height={100}/>
                    <p className=" font-semibold text-3xl mt-9 ml-5">Blogger</p>
                   
                    </div>
                         
            </nav>
        </div>
    )
}