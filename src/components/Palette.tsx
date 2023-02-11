import React, { useState } from "react";
import { copyTextToClipboard } from "../utils/copyToClipboard";
import Icon from "./Icon";

const Palette = ({ hex, num }: { hex: string; num: number }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    copyTextToClipboard(hex)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <button
        className={`flex flex-col h-32 items-center justify-between  md:flex-col md:justify-end relative`}
        onClick={handleCopy}
      >
        <div
          className='h-32 w-full mb-1 text-lg flex items-center justify-center '
          style={{ backgroundColor: hex }}
        >
          {isCopied ? <Icon /> : null}
        </div>

        <span className='mix-blend-hard-light font-mono text-white block text-xs mb-1 md:text-base'>
          {num}%
        </span>
        <span className='mix-blend-luminosity text-white font-mono block text-xs md:text-base'>
          {hex}
        </span>
      </button>
    </>
  );
};

export default Palette;
