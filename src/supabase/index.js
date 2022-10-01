import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vhdzrfedburaewjrjqab.supabase.co';
const supabaseAnonToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoZHpyZmVkYnVyYWV3anJqcWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIyODg5MDYsImV4cCI6MTk3Nzg2NDkwNn0.r0E5iKoarIKHhBmvA4sw_4DlmnqH_ZYaj8cNhBuVhT4';

export const supabase = createClient(supabaseUrl, supabaseAnonToken);
export default supabase;
