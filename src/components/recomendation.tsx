import { IBlog } from "@/types/blog"
import ShareButton from "./share";

export default function RecomendationBlog ({blogs}: {blogs: IBlog[]}){
    return(
        
        <div className="text-gray-100 flex flex-col cursor-pointer">
            <p className="pb-4 pt-10 underline font-bold">BACA JUGA</p>
            {blogs.map((item)=>{
                return (
                 <div key={item.fields.slug} className="flex flex-row pb-4">
                    {item.fields.thumbnail && (
                    <img
                    src={item.fields.thumbnail.fields.file.url}
                    alt={item.fields.tittle}
                    className="w-[100px] h-[80px]" />)}
                    <div className="pl-4 mt-3">
                    <p className="hover:underline font-bold">{item.fields.tittle}</p>
                    <div className="flex flex-row ">
                    <p className=" font-bold text-[10px]  mt-1">{item.fields.author.fields.name}</p>
                    <p className="ml-3 text-[8px] mt-2">{item.fields.date}</p>
                    </div>
                    </div>
                    
                    </div>
                 )
               }
            )}
            <ShareButton/>
        </div>
    )
}