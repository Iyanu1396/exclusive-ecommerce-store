import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vpefxwctciqxaugdavqx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwZWZ4d2N0Y2lxeGF1Z2RhdnF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk1NzQzMjEsImV4cCI6MjAzNTE1MDMyMX0.tPtFN0omGgztxiZdO9hG9MUvpYp6goXoWVRJjuCW58A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
