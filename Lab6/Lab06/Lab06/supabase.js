import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://wqgcbqxmhpefojvrflov.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxZ2NicXhtaHBlZm9qdnJmbG92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2Mjk3NjcsImV4cCI6MjEwODIwNTc2N30.zv9_i2pPbb5_GQkJ5BR3ksbY3Uosnjh7dwK8lm4HjhE";

export const supabase = createClient(supabaseUrl, supabaseKey);