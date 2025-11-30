'use client';

import { useState, useCallback } from 'react';
import { Upload, Loader2 } from 'lucide-react';
import { clsx } from 'clsx';

interface IconUploaderProps {
    onUploadSuccess: () => void;
}

export default function IconUploader({ onUploadSuccess }: IconUploaderProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const uploadFile = async (file: File) => {
        if (file.type !== 'image/svg+xml') {
            setError('Please upload an SVG file.');
            return;
        }

        setIsUploading(true);
        setError(null);

        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await fetch('/api/icons', {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) {
                throw new Error('Upload failed');
            }

            onUploadSuccess();
        } catch (err) {
            setError('Failed to upload icon.');
        } finally {
            setIsUploading(false);
            setIsDragging(false);
        }
    };

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if (file) {
            uploadFile(file);
        }
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            uploadFile(file);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto mb-8">
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={clsx(
                    'relative border-2 border-dashed rounded-xl p-8 transition-colors text-center cursor-pointer',
                    isDragging ? 'border-blue-500 bg-blue-50/10' : 'border-gray-300 hover:border-gray-400',
                    isUploading && 'opacity-50 pointer-events-none'
                )}
            >
                <input
                    type="file"
                    accept=".svg"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />

                <div className="flex flex-col items-center gap-3">
                    {isUploading ? (
                        <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
                    ) : (
                        <Upload className="w-10 h-10 text-gray-400" />
                    )}
                    <div className="text-sm text-gray-600">
                        <span className="font-semibold text-blue-600">Click to upload</span> or drag and drop
                    </div>
                    <p className="text-xs text-gray-500">SVG files only</p>
                </div>
            </div>

            {error && (
                <p className="mt-2 text-sm text-red-500 text-center">{error}</p>
            )}
        </div>
    );
}
