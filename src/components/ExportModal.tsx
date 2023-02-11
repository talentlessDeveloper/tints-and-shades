import React, { useRef, useState } from "react";
import { copyTextToClipboard } from "../utils/copyToClipboard";
import ExportModalBtns from "./ExportModalBtns";
import ExportType from "./ExportType";
import Icon from "./Icon";

type ExportModalProps = {
  setExportModal: React.Dispatch<React.SetStateAction<boolean>>;
  tints: string[];
  shades: string[];
  colorName: string;
};

const ExportModal = ({
  setExportModal,
  tints,
  shades,
  colorName,
}: ExportModalProps) => {
  const [type, setType] = useState("tailwind");
  const [isCopied, setIsCopied] = useState(false);
  const [colorType, setColorType] = useState("tints");

  const preRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    if (preRef.current) {
      copyTextToClipboard(preRef.current?.innerText)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  let tintsAndShades = colorType === "tints" ? tints : shades;

  return (
    <div className='bg-gray-200/30 backdrop-blur w-full h-screen fixed inset-0 flex items-center justify-center '>
      <div className='font-mono bg-gray-900 text-gray-50 w-11/12 max-w-2xl relative z-10 rounded-md overflow-hidden pb-6'>
        <ExportModalBtns
          setType={setType}
          type={type}
          setExportModal={setExportModal}
        />
        <div className='px-5 mt-8 export-type '>
          <div className='flex gap-x-4 font-mono mb-4'>
            <button
              className={`px-4 pb-1 transition-all duration-300  ${
                colorType === "tints"
                  ? "text-gray-50 border-b border-solid border-gray-300 shadow-md"
                  : "text-gray-500"
              }`}
              onClick={() => setColorType("tints")}
            >
              Tints
            </button>
            <button
              className={`px-4 pb-1 transition-all duration-300  ${
                colorType === "shades"
                  ? "text-gray-50 border-b border-solid border-gray-300 shadow-md"
                  : "text-gray-500"
              }`}
              onClick={() => setColorType("shades")}
            >
              Shades
            </button>
          </div>
          <div className='flex justify-between items-start'>
            <ExportType
              type={type}
              tints={tintsAndShades}
              colorName={colorName}
              preRef={preRef}
            />
            <button onClick={handleCopy}>
              {!isCopied ? (
                <Icon />
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='30'
                  height='30'
                  viewBox='0,0,256,256'
                >
                  <g
                    fill='#42a81f'
                    fillRule='nonzero'
                    stroke='none'
                    strokeWidth='1'
                    strokeLinecap='butt'
                    strokeLinejoin='miter'
                    strokeMiterlimit='10'
                    strokeDasharray=''
                    strokeDashoffset='0'
                    fontFamily='none'
                    fontWeight='none'
                    fontSize='none'
                    textAnchor='none'
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform='scale(5.12,5.12)'>
                      <path d='M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-4.56 -1.33972,-8.81067 -3.63672,-12.38867l-1.36914,1.61719c1.895,3.154 3.00586,6.83148 3.00586,10.77148c0,11.579 -9.421,21 -21,21c-11.579,0 -21,-9.421 -21,-21c0,-11.579 9.421,-21 21,-21c5.443,0 10.39391,2.09977 14.12891,5.50977l1.30859,-1.54492c-4.085,-3.705 -9.5025,-5.96484 -15.4375,-5.96484zM43.23633,7.75391l-19.32227,22.80078l-8.13281,-7.58594l-1.36328,1.46289l9.66602,9.01563l20.67969,-24.40039z'></path>
                    </g>
                  </g>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;
