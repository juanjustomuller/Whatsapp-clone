import { createClient } from '@supabase/supabase-js'

const supabaseUrl =  'https://viggojhwrwxpfakodtgs.supabase.co'

const supabaseKey = process.env.VITE_SUPABASE_KEY
//console.log(supabaseKey);   

export const supabase = createClient(supabaseUrl, supabaseKey)