"use client";

import { useState } from "react";

export default function DotTrickGenerator() {
  const [email, setEmail] = useState("");
  const [variations, setVariations] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  // Generate all possible dot variations of the username
  const generateDotVariations = (username: string): string[] => {
    if (!username || username.length <= 1) return [username];
    
    const results: string[] = [];
    
    // Function to generate all combinations
    const generateCombinations = (prefix: string, remaining: string) => {
      if (remaining.length === 0) {
        results.push(prefix);
        return;
      }
      
      // Add character without dot
      generateCombinations(prefix + remaining[0], remaining.substring(1));
      
      // Add character with dot (only if not the last character)
      if (remaining.length > 1) {
        generateCombinations(prefix + remaining[0] + ".", remaining.substring(1));
      }
    };
    
    generateCombinations("", username);
    return results;
  };

  const handleGenerateVariations = () => {
    if (!email) return;

    setIsLoading(true);
    
    // Check if email contains @ symbol
    let username: string;
    let domain: string = "gmail.com";
    
    if (email.includes("@")) {
      // Split email into username and domain
      [username, domain] = email.split("@");
    } else {
      // User entered just the username
      username = email;
    }
    
    // Remove any existing dots from the username
    const cleanUsername = username.replace(/\./g, "");
    
    // Generate variations
    setTimeout(() => {
      const usernameVariations = generateDotVariations(cleanUsername);
      const emailVariations = usernameVariations.map(variant => `${variant}@${domain}`);
      setVariations(emailVariations);
      setIsLoading(false);
    }, 500); // Small timeout to show loading state
  };

  const handleCopy = async (variation: string) => {
    try {
      await navigator.clipboard.writeText(variation);
      setCopied(variation);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleCopyAll = async () => {
    try {
      const allVariations = variations.join("\n");
      await navigator.clipboard.writeText(allVariations);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    } catch (err) {
      console.error("Failed to copy all: ", err);
    }
  };

  return (
    <div className="w-full">
      <div className="glass-effect p-6">
        <h3 className="text-2xl font-bold mb-6">Gmail Dot Trick Generator</h3>
        <p className="mb-4 opacity-80">
          Gmail ignores dots (.) in email addresses. This means <strong>john.doe@gmail.com</strong>, <strong>j.ohndoe@gmail.com</strong>, and <strong>j.o.h.n.d.o.e@gmail.com</strong> all go to the same inbox!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter username or full Gmail address"
            className="flex-1 px-4 py-2 rounded-full border border-[var(--glass-border)] bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          />
          <button 
            onClick={handleGenerateVariations} 
            disabled={isLoading}
            className="btn-primary whitespace-nowrap"
          >
            {isLoading ? "Generating..." : "Generate Variations"}
          </button>
        </div>
        
        {variations.length > 0 && (
          <div>
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-lg font-semibold">
                {variations.length} Possible Variations:
              </h4>
              <button
                onClick={handleCopyAll}
                className="btn-secondary py-1 px-3 text-sm"
              >
                {copiedAll ? "✓ All Copied!" : "Copy All"}
              </button>
            </div>
            <div className="max-h-[300px] overflow-y-auto glass-effect p-4">
              <ul className="space-y-2">
                {variations.map((variation, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="font-mono">{variation}</span>
                    <button
                      onClick={() => handleCopy(variation)}
                      className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors"
                    >
                      {copied === variation ? "✓ Copied!" : "Copy"}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
