// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://lhvlkmeiedjftlhqrjoe.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxodmxrbWVpZWRqZnRsaHFyam9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzNjUxMDMsImV4cCI6MjA0OTk0MTEwM30.l1JmurJpx1xzdFz9zF2TLgExvVgPjcYZQsjor4PZiSc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);