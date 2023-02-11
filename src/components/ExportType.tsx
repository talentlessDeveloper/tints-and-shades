import React from "react";
type ExportTypeProps = {
  type: string;
  tints: string[];
  colorName: string;
  preRef: React.RefObject<HTMLDivElement>;
};

const ExportType = ({ type, tints, colorName, preRef }: ExportTypeProps) => {
  return (
    <div ref={preRef}>
      {type === "scss" ? (
        <pre id='scss'>
          {tints.map((tint, i) => {
            const num = `${i * 10}`;
            return (
              <span key={`${tint}${i}`}>
                ${colorName.toLowerCase()}-{num}:{tint}
              </span>
            );
          })}
        </pre>
      ) : type === "tailwind" ? (
        <pre id='tailwind' className='preTailwind'>
          '{colorName.toLowerCase()}' : &#123;
          {
            <>
              {tints.map((tint, i) => {
                const num = `${i * 10}`;
                return (
                  <span key={`${tint}${i}`}>
                    {num} : {tint},
                  </span>
                );
              })}
              &#125;
            </>
          }
          ,
        </pre>
      ) : (
        <pre id='css'>
          {tints.map((tint, i) => {
            const num = `${i * 10}`;
            return (
              <span key={`${tint}${i}`}>
                --{colorName.toLowerCase()}-{num}:{tint}
              </span>
            );
          })}
        </pre>
      )}
    </div>
  );
};

export default ExportType;
