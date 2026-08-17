-- Public bucket: gambar dapat dibaca oleh website tanpa session.
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('portfolio', 'portfolio', true, 5242880, ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'])
ON CONFLICT (id) DO UPDATE SET public = true, file_size_limit = 5242880;

-- Mutasi file hanya dapat dilakukan oleh user Supabase yang sudah login.
CREATE POLICY "Authenticated users can upload portfolio assets"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'portfolio');

CREATE POLICY "Authenticated users can update portfolio assets"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'portfolio')
WITH CHECK (bucket_id = 'portfolio');

CREATE POLICY "Authenticated users can delete portfolio assets"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'portfolio');
