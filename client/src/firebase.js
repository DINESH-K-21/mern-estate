// src/supabase.js
import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;  // Your Supabase URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;  // Your Supabase Anon key
export const supabase = createClient(supabaseUrl, supabaseKey);