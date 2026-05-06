import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const usesSecretKey = supabaseAnonKey?.startsWith('sb_secret_');

export const supabaseConfigError = usesSecretKey
  ? 'Supabase secret keys cannot be used in browser apps. Use the anon/public or publishable key instead.'
  : '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey && !usesSecretKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
