import { createClient } from '@supabase/supabase-js';
export const client = createClient(
  process.env.REACT_APP_SUPABASE_API_URL,
  process.env.REACT_APP_SUPABASE_API_KEY
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}
//update
