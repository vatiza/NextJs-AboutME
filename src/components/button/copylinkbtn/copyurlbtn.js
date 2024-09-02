"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
const CopyUrlBtn = () => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    const url = `${window.location.href}${router.asPath || ""}`;

    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div>
      <button className="btn btn-outline " onClick={copyToClipboard}>
        {copied ? "Link Copied!" : "Copy Link"}
      </button>
    </div>
  );
};

export default CopyUrlBtn;
