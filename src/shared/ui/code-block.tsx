"use client";
import { CodeBlock as ReactCodeBlock } from "react-code-block";
import { themes } from "prism-react-renderer";

function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <ReactCodeBlock code={code} language={language} theme={themes.oneDark}>
      <div className="relative">
        <ReactCodeBlock.Code className="!p-6 rounded-xl shadow-lg">
          <div className="table-row">
            <ReactCodeBlock.LineNumber className="table-cell pr-4 !text-[12px] text-right select-none" />
            <ReactCodeBlock.LineContent className="table-cell  !text-sm">
              <ReactCodeBlock.Token />
            </ReactCodeBlock.LineContent>
          </div>
        </ReactCodeBlock.Code>
      </div>
    </ReactCodeBlock>
  );
}

export { CodeBlock };
