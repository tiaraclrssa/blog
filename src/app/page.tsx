import RecomendationBlog from "@/components/recomendation";
import { getBlog } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import Link from "next/link";

export default async function Home() {
  const data: IBlog[]= await getBlog()
  
  return (
    <div className="bg-gray-900">  
    <div className="flex flex-row gap-3 h-screen p-3"> 
    <RecomendationBlog blogs={data}/>
      {data.map((item) => {
        return (
          <div key={item.fields.slug} className="bg-black rounded-3xl mt-10 h-[500px]">
              {item.fields.thumbnail && (
                <img
                  src={item.fields.thumbnail.fields.file.url}
                  alt={item.fields.tittle}
                  className="w-[380px] h-72 object-cover mb-2 rounded-t-3xl "
                />
              )}
              <div className="rounded-lg font-bold text-gray-200 flex justify-center items-center text-[20px] underline">{item.fields.tittle}</div>
              {item.fields.author &&(
                <div className="flex flex-row ml-3 mt-5">
                <img className="w-10 h-10 rounded-full"
                src={item.fields.author.fields.avatar.fields.file.url}
                alt={item.fields.tittle}/>
                <div className="flex flex-col ml-3 font-bold text-[13px] mt-1 text-white">
                <p>{item.fields.author.fields.name}</p>
                <p>{item.fields.author.fields.email}</p>
                </div>
                </div>
              )}
                <Link  className="flex justify-center items-center ml-[98px] rounded-2xl mt-3 bg-gray-300 w-[120px] h-9 text-black font-bold" href={`blog/${item.fields.slug}`}>
                   Read More
                </Link>
          </div>
        )
      })}
    </div>
    </div>
  );
}
