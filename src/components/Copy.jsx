import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { toast } from "react-toastify";

function Copy({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    // const formattedJsonString = JSON.stringify(text, null, 2);
    // const unquotedJsonString = formattedJsonString.replace(/^"|"$/g, "");
    // navigator.clipboard.writeText(unquotedJsonString);
    navigator.clipboard.writeText(text);
    toast.success("JSON copied to your clipboard.");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div
      onClick={handleCopy}
      className="cursor-pointer rounded absolute bottom-2 right-8 transition bg-green-500 hover:bg-green-700 text-white p-2"
    >
      {!copied ? "Copy" : <CheckBadgeIcon width={20} />}
    </div>
  );
}

export default Copy;
