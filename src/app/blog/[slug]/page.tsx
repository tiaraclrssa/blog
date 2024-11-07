import { getBlog, getBlogSlug } from "@/libs/blog"
import { IBlog } from "@/types/blog"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { Children } from "react";
import { Options } from "@contentful/rich-text-react-renderer";
import { title } from "process";

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const blog: IBlog = await getBlogSlug(params.slug);

    return {
        title: blog.fields.tittle,
        description: blog.fields.tittle,
        authors: blog.fields.author.fields.name,
        openGraph: {
            images: [`https:${blog.fields.thumbnail.fields.file.url}`]
        }
    }
}

export const generateStaticParams = async () => {
    const blogs: IBlog[] =await getBlog()

    return blogs.map((item)=> ({slug: item.fields.slug,}));
};

export default async function BlogDetail({params}: {params: {slug: string} }){
const blog: IBlog = await getBlogSlug(params.slug)

    return(
        <div className="flex-col px-[250px]">
            <h1 className="text-green-800 mt-10 font-bold text-lg mb-5 underline">{blog.fields.category}</h1>
            <h1 className="font-bold text-5xl">{blog.fields.tittle}</h1>
            <div className="flex flex-row gap-8">
            <p className="text-gray-800 mt-3 font-bold">{blog.fields.author.fields.name}</p>
            <p className="text-gray-400 text-[12px] mt-4">{blog.fields.date}</p>
            </div>
            <img className="w-[535px] mt-5" src={blog.fields.thumbnail.fields.file.url} alt={blog.fields.tittle}/>
            <div className="w-[600px] mt-8">{documentToReactComponents(blog.fields.content)}</div>
        </div>
    )
}