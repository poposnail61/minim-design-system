'use client';

import { useState } from 'react';

interface IconPreviewProps {
    icons: string[];
}

export default function IconPreview({ icons }: IconPreviewProps) {
    const [selectedIcon, setSelectedIcon] = useState<string>(icons[0] || '');
    const [size, setSize] = useState(48);
    const [color, setColor] = useState('#3b82f6');

    if (icons.length === 0) return null;

    // If selected icon is no longer in list (e.g. deleted), reset
    if (selectedIcon && !icons.includes(selectedIcon) && icons.length > 0) {
        setSelectedIcon(icons[0]);
    }

    const name = selectedIcon.replace('.svg', '');
    const className = `icon icon-${name}`;

    return (
        <div className="border rounded-xl p-6 bg-white dark:bg-gray-800 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Live Preview</h3>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Select Icon</label>
                        <select
                            value={selectedIcon}
                            onChange={(e) => setSelectedIcon(e.target.value)}
                            className="w-full p-2 rounded-md border bg-transparent"
                        >
                            {icons.map((icon) => (
                                <option key={icon} value={icon}>
                                    {icon.replace('.svg', '')}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Size ({size}px)</label>
                        <input
                            type="range"
                            min="16"
                            max="128"
                            value={size}
                            onChange={(e) => setSize(Number(e.target.value))}
                            className="w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Color</label>
                        <div className="flex gap-2 items-center">
                            <input
                                type="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                className="h-8 w-16 rounded cursor-pointer"
                            />
                            <span className="text-sm font-mono text-gray-500">{color}</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex items-center justify-center min-h-[200px] border rounded-lg bg-gray-50 dark:bg-gray-900/50">
                    <i
                        className={className}
                        style={{ fontSize: size, color: color }}
                    />
                </div>
            </div>

            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-900 rounded-md font-mono text-sm overflow-x-auto">
                {`<i class="${className}" style="font-size: ${size}px; color: ${color};"></i>`}
            </div>
        </div>
    );
}
