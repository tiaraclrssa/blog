"use client";
import { useState } from "react";
import {FaLink, FaCheck} from "react-icons/fa6"
import { useCopyToClipboard } from "usehooks-ts"

export default function CopyButton(){
  const [,copy] =useCopyToClipboard();
  const [copied, setCopied] = useState<boolean>(false)
    return(
        <div className="text-black" onClick={()=>{
          copy("link");
          setCopied(true)
        }}
        onMouseLeave={()=> setCopied(false)}
        >
        {copied? <FaCheck/> : <FaLink/>}
        </div>
    )
}