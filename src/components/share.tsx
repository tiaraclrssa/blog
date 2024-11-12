import Link from "next/link";
import 
{ IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter, IoLogoWhatsapp } 
from "react-icons/io5";
import { IconType } from "react-icons/lib";
import CopyButton from "./copy";

interface IShare {
    Icon: IconType;
    Link: string;
}

const share: IShare[] = [
{ Icon: IoLogoFacebook, Link: "https://www.facebook.com/sharer/sharer.php?u="},
{ Icon: IoLogoLinkedin, Link: "https://www.linkedin.com/sharing/share-offside/?url="} ,
{ Icon: IoLogoTwitter,  Link: "https://www.twitter.com/intent/tweet?url="} ,
{ Icon: IoLogoWhatsapp, Link: "https://wa.me/?text="}

]
export default function ShareButton(){
    return(
        <div className=" font-bold mt-14">
            <p className="text-white underline mb-4">SHARE</p>
            <div className=" text-[26px] rounded-lg flex flex-row items-center text-black gap-8 text-2xl bg-white h-10 w-72 justify-center">
            <CopyButton/>
                {share.map((item,idx)=>{
                    return(
                        <Link key={idx} href={item.Link}>
                            <item.Icon/>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}