import { client, checkError } from './client'

export function fetchPosts() {
    const data = await client
    .from('posts')
    .select('*');
    console.log(data);
    return checkError(data);
} 