const base_url = process.env.CONTENTFUL_BASE_URL;
const spaceId = process.env.CONTENTFUL_SPACE_ID
const token = process.env.CONTENTFUL_TOKEN


import resolveResponse from "contentful-resolve-response"
export const getBlog = async () => {
    const res = await fetch (`${base_url}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=blog`,
    ); 
    const data= await res.json();
    const result = resolveResponse(data);
    return result;
}
export const getBlogSlug = async (slug: string) => {
    const res = await fetch (`${base_url}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=blog&fields.slug=${slug}`,
    ); 
    const data= await res.json();
    const result = resolveResponse(data);
    return result[0];
}
export const getBlogRecom = async (slug: string) => {
    const res = await fetch (`${base_url}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=blog&fields.slug[ne]=${slug}&limit=3`,
    ); 
    const data= await res.json();
    const result = resolveResponse(data);
    return result;
}