"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

function showToast() {
  const id = toast.add({
    title: "Link Copied to Clipboard",
    actionProps: {
      children: "Undo",
      onClick() {
        toast.close(id);
      },
    },
  });
}

interface CopyButtonProps {
  text: string;
  className?: string;
}

const CopyButton = ({ text, className = "" }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);
      showToast();

      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`rounded-lg p-2 transition-all duration-200 hover:bg-primary/10 ${className}`}
      aria-label={copied ? "Copied" : "Copy"}
    >
      {copied ? (
        <Check className="text-secondary text-xs" />
      ) : (
        <Copy className="text-secondary text-xs" />
      )}
    </button>
  );
};

export default CopyButton;