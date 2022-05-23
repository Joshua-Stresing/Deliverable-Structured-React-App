import { client, checkError } from './client';

export async function fetchPosts() {
  const data = await client.from('posts').select('*');

  return checkError(data);
}

export async function fetchPostsById(id) {
  const data = await client.from('posts').select('*').match({ id }).single();

  return checkError(data);
}

export async function addPost(post) {
  const data = await client.from('posts').insert(post);

  return checkError(data);
}

export async function editPost(post) {
  const data = await client.from('posts').update(post).match({ id: post.id });

  return checkError(data);
}

export async function deletePost(id) {
  const data = await client.from('posts').delete().match({ id }).single();

  return checkError(data);
}
