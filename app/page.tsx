'use client';

import { useState, useEffect, useCallback } from 'react';
import IconUploader from '@/components/IconUploader';
import IconGallery from '@/components/IconGallery';
import IconPreview from '@/components/IconPreview';

export default function Home() {
  const [icons, setIcons] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchIcons = useCallback(async () => {
    try {
      const res = await fetch('/api/icons');
      const data = await res.json();
      setIcons(data.icons || []);
    } catch (error) {
      console.error('Failed to fetch icons', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchIcons();
  }, [fetchIcons]);

  const handleDelete = async (filename: string) => {
    if (!confirm('Are you sure you want to delete this icon?')) return;

    try {
      const res = await fetch(`/api/icons/${filename}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        fetchIcons();
        // Force reload of CSS to remove the class
        const link = document.querySelector('link[href="/api/icons/css"]');
        if (link) {
          link.setAttribute('href', `/api/icons/css?t=${Date.now()}`);
        }
      }
    } catch (error) {
      console.error('Failed to delete icon', error);
    }
  };

  const handleUploadSuccess = () => {
    fetchIcons();
    // Force reload of CSS to add the new class
    const link = document.querySelector('link[href="/api/icons/css"]');
    if (link) {
      link.setAttribute('href', `/api/icons/css?t=${Date.now()}`);
    }
  };

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">SVG Icon Manager</h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Upload your SVGs and use them as <code>&lt;i&gt;</code> tags with full control over size and color.
          </p>
        </div>

        <section>
          <IconUploader onUploadSuccess={handleUploadSuccess} />
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Icon Gallery</h2>
          {isLoading ? (
            <div className="text-center py-12">Loading...</div>
          ) : (
            <IconGallery icons={icons} onDelete={handleDelete} />
          )}
        </section>

        <section className="space-y-6 border-t pt-12">
          <IconPreview icons={icons} />
        </section>
      </main>
    </div>
  );
}
