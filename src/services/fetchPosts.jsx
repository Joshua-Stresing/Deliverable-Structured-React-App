import { client, checkError } from './client';

export async function fetchPosts() {
  const data = await client.from('posts').select('*');

  return checkError(data);
}

export async function fetchPostsById(id) {
  const data = await client.from('posts').select('*').match({ id }).single();

  return checkError(data);
}
