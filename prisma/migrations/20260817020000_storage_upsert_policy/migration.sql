-- Storage upsert memeriksa keberadaan object terlebih dahulu, sehingga
-- user terautentikasi memerlukan policy SELECT selain INSERT/UPDATE.
CREATE POLICY "Authenticated users can read portfolio assets"
ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'portfolio');
