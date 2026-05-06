# Website revamp for Progress Property Management

I designed and built this website from scratch using react. I used react-router to build 2 static pages for the home page and contact page. I am using render to host the website

## Blog dashboard setup

1. Create a Supabase project and run `supabase/blog_setup.sql` in the Supabase SQL editor.
2. Create an admin user in Supabase Auth.
3. Add that user's `id` and email to `public.blog_admins` using the commented insert at the bottom of `supabase/blog_setup.sql`.
4. Add these environment variables to local `.env` and the Render site:
   - `REACT_APP_SUPABASE_URL`
   - `REACT_APP_SUPABASE_ANON_KEY`
     Use the Supabase anon/public or publishable key. Do not use an `sb_secret_` key in this React app because browser environment variables are public.
5. Visit `/blog-dashboard` and log in with the Supabase Auth user.
