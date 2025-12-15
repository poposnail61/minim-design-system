import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Typography() {
    const [fontName, setFontName] = useState("MinimSoftVF");
    const [cssUrl, setCssUrl] = useState("http://localhost:3000"); // Defaulting to local dev URL
    const [activeFont, setActiveFont] = useState<{ name: string, url: string } | null>(null);

    const handleApply = () => {
        // Construct standard URL structure from Font Manager or use direct input
        // Since we don't know exact deployment URL, we let user input base or full.
        // For smoother demo, let's assume local pattern:
        // http://localhost:3000/release/[name]/[name].css

        let url = cssUrl;
        if (!url.endsWith(".css")) {
            // If user just put base url "http://localhost:3000", append path
            url = `${url.replace(/\/$/, "")}/release/${fontName}/${fontName}.css`;
        }

        setActiveFont({ name: fontName, url });
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <header className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Typography</h1>
                <p className="text-muted-foreground">
                    Preview and test fonts served by the Minim Font Manager.
                </p>
            </header>

            <section className="p-6 border rounded-lg bg-card text-card-foreground shadow-sm space-y-4">
                <h2 className="text-lg font-semibold">Font Configuration</h2>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Font Manager Base URL</label>
                        <Input
                            value={cssUrl}
                            onChange={(e) => setCssUrl(e.target.value)}
                            placeholder="http://localhost:3000"
                        />
                        <p className="text-xs text-muted-foreground">URL of your running Font Manager (e.g. localhost:3000 or deployed url)</p>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Font Family Name (ID)</label>
                        <div className="flex gap-2">
                            <Input
                                value={fontName}
                                onChange={(e) => setFontName(e.target.value)}
                                placeholder="e.g. MinimSoftVF"
                            />
                            <Button onClick={handleApply}>Load Font</Button>
                        </div>
                    </div>
                </div>
            </section>

            {activeFont && (
                <section className="space-y-6">
                    <link rel="stylesheet" href={activeFont.url} />

                    <div className="p-4 rounded-md bg-muted/50 border">
                        <p className="text-sm text-muted-foreground mb-2">
                            Loaded: <code className="text-xs bg-muted px-1 py-0.5 rounded">{activeFont.url}</code>
                        </p>
                        <p className="text-xs text-green-600 font-medium flex items-center gap-1">
                            ● Active Font Family: {activeFont.name}
                        </p>
                    </div>

                    <div className="space-y-8" style={{ fontFamily: `"${activeFont.name}", sans-serif` }}>

                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold border-b pb-2">Headings</h3>
                            <div className="space-y-4">
                                <h1>Heading 1 - The quick brown fox jumps over the lazy dog</h1>
                                <h2>Heading 2 - The quick brown fox jumps over the lazy dog</h2>
                                <h3>Heading 3 - The quick brown fox jumps over the lazy dog</h3>
                                <h4>Heading 4 - The quick brown fox jumps over the lazy dog</h4>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold border-b pb-2">Body Text</h3>
                            <p className="leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p className="leading-relaxed font-bold">
                                This is bold text using the same font family.
                            </p>
                            <p className="leading-relaxed italic">
                                This is italic text (if variant exists).
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold border-b pb-2">Korean Support</h3>
                            <p className="leading-relaxed text-xl">
                                다람쥐 헌 쳇바퀴에 타고파. <br />
                                키스의 고유조건은 입술끼리 만나야 하고 특별한 기술은 필요치 않다.
                            </p>
                        </div>

                    </div>
                </section>
            )}
        </div>
    );
}
