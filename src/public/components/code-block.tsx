"use client";

import hljs from "highlight.js";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { Copy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";

const LIGHT_STYLE =
  "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/atom-one-light.min.css";
const DARK_STYLE =
  "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/atom-one-dark.min.css";

interface CodeBlockProps {
  language: string;
  code: string;
}

export default function CodeBlock(props: CodeBlockProps) {
  const { theme, systemTheme } = useTheme();
  const { toast } = useToast();

  useEffect(() => {
    const style = document.createElement("link");
    style.rel = "stylesheet";
    if (theme === "system") {
      style.href = systemTheme === "dark" ? DARK_STYLE : LIGHT_STYLE;
    } else {
      style.href = theme === "dark" ? DARK_STYLE : LIGHT_STYLE;
    }
    document.head.appendChild(style);

    hljs.highlightAll();

    return () => {
      document.head.removeChild(style);
    };
  }, [theme, systemTheme]);

  return (
    <pre className=" shadow-sm relative">
      <div className="absolute top-0 right-0 m-2 flex place-items-center py-2 px-1 rounded-full hover:bg-gray-200">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Copy
                className="h-4"
                onClick={() => {
                  navigator.clipboard.writeText(props.code);
                  toast({
                    description: "Successfully copied code snippet",
                  });
                }}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy snippet</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <code className={`language-${props.language}`}>{props.code.trim()}</code>
    </pre>
  );
}
