'use client';

import { useState } from 'react';
import { Trash2, Copy, Check } from 'lucide-react';

interface IconGalleryProps {
    icons: string[];
    onDelete: (filename: string) => void;
}

export default function IconGallery({ icons, onDelete }: IconGalleryProps) {
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(null), 2000);
    };

    if (icons.length === 0) {
        return (
            <div className="text-center py-12 text-gray-500">
                No icons uploaded yet.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {icons.map((file) => {
                const name = file.replace('.svg', '');
                const className = `icon icon-${name}`;

                return (
                    <div key={file} className="group relative border rounded-lg p-4 flex flex-col items-center gap-3 hover:shadow-md transition-shadow bg-white dark:bg-gray-800">
                        <div className="w-12 h-12 flex items-center justify-center text-3xl text-gray-700 dark:text-gray-200">
                            <i className={className} />
                        </div>

                        <div className="w-full text-center">
                            <p className="text-xs font-mono text-gray-500 truncate" title={className}>
                                .{className.split(' ')[1]}
                            </p>
                        </div>

                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                            <button
                                onClick={() => copyToClipboard(className)}
                                className="p-1.5 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300"
                                title="Copy class"
                            >
                                {copied === className ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            </button>
                            <button
                                onClick={() => onDelete(file)}
                                className="p-1.5 rounded-md bg-red-50 hover:bg-red-100 text-red-500 dark:bg-red-900/20 dark:hover:bg-red-900/30"
                                title="Delete icon"
                            >
                                <Trash2 className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
