const base_url = process.env.CONTENTFUL_BASE_URL;
const spaceId = process.env.CONTENTFUL_SPACE_ID
const token = process.env.CONTENTFUL_TOKEN


import resolveResponse from "contentful-resolve-response"
export const getBlog = async () => {
    const res = await fetch (`${base_url}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=blog`,
        {next: {revalidate: 3600}}
    ); 
    const data= await res.json();
    const result = resolveResponse(data);
    return result;
}
export const getBlogSlug = async (slug: string) => {
    const res = await fetch (`${base_url}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=blog&fields.slug=${slug}`,
        {next: {revalidate: 3600}}
    ); 
    const data= await res.json();
    const result = resolveResponse(data);
    return result[0];
}