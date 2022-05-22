import { addPost } from '../services/fetchPosts';

export default function useClonePost(originalPost) {
  const clone = { ...originalPost };
  delete clone.id;
  delete clone.users_id;
  addPost(clone);
}
