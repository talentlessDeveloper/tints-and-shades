import React from "react";

type ExportModalBtnsProps = {
  setType: React.Dispatch<React.SetStateAction<string>>;
  setExportModal: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
};

const ExportModalBtns = ({
  setType,
  setExportModal,
  type,
}: ExportModalBtnsProps) => {
  return (
    <div className='flex justify-between items-center bg-gray-700 py-3 px-5 font-serif'>
      <div className='flex gap-x-4 text-gray-500 '>
        <button
          className={`${
            type === "tailwind" ? "text-gray-50" : ""
          } modal-ref focus:outline-dashed focus:outline-2 focus:outline-white focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-white`}
          onClick={() => {
            setType("tailwind");
          }}
        >
          Tailwind
        </button>
        <button
          className={type === "css" ? "text-gray-50" : ""}
          onClick={() => setType("css")}
        >
          CSS
        </button>
        <button
          className={type === "scss" ? "text-gray-50" : ""}
          onClick={() => setType("scss")}
        >
          SCSS
        </button>
      </div>
      <button aria-label='cancel modal' onClick={() => setExportModal(false)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          x='0px'
          y='0px'
          width='20'
          height='20'
          viewBox='0,0,256,256'
        >
          <g
            fill='#6b7280'
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
            <g transform='scale(10.66667,10.66667)'>
              <path d='M4.70703,3.29297l-1.41406,1.41406l7.29297,7.29297l-7.29297,7.29297l1.41406,1.41406l7.29297,-7.29297l7.29297,7.29297l1.41406,-1.41406l-7.29297,-7.29297l7.29297,-7.29297l-1.41406,-1.41406l-7.29297,7.29297z'></path>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default ExportModalBtns;
