import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bmxnsuildxczrsqnmyje.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJteG5zdWlsZHhjenJzcW5teWplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxMTYyMzIsImV4cCI6MjAxODY5MjIzMn0.eKrZxTfD1sNZV0GmPuLQ_sPYTPecCQJo_DNbwIbyXSE";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
