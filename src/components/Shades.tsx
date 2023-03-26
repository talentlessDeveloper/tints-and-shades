import { useEffect, useState } from "react";

import { useTinyColors } from "../utils/tinyColors";
import { GetColorName } from "hex-color-to-color-name";

import Form from "./Form";
import Palette from "./Palette";
import tinycolor from "tinycolor2";
import ExportModal from "./ExportModal";

const Shades = () => {
  const [color, setColor] = useState("#82bd69");
  const [exportModal, setExportModal] = useState(false);

  const { tints, shades } = useTinyColors(color);

  const hexColor = tinycolor(color).toHexString();
  const colorName = GetColorName(hexColor);

  useEffect(() => {
    const modal = document.querySelector(".modal-ref") as HTMLElement;
    if (modal && exportModal) {
      modal.focus();
    }
  }, [exportModal]);

  return (
    <section>
      <div className='w-11/12 mx-auto mt-16'>
        <Form setColor={setColor} />

        <div className='mt-8'>
          <div className='flex justify-between text-gray-50'>
            <p className='text-xl font-mono'>{colorName}</p>
            <button
              className='font-mono'
              onClick={() => setExportModal((m) => !m)}
            >
              Export
            </button>
          </div>
          <div className='mt-4'>
            <h2 className='font-mono text-gray-50 text-xl mb-[2px]'>Shades</h2>
            <div className='grid  grid-cols-[repeat(10,minmax(60px,1fr))]  overflow-x-auto relative pb-6 md:pb-0'>
              {shades.map((colorCode, i) => {
                const hex = colorCode;
                const num = i * 10;
                return <Palette key={`${num}-${hex}`} hex={hex} num={num} />;
              })}
            </div>
          </div>
          <div className='mt-10'>
            <h2 className='font-mono text-gray-50 text-xl  mb-[2px]'>Tints</h2>
            <div className='grid grid-cols-[repeat(10,minmax(60px,1fr))]   overflow-x-auto relative  pb-6 md:pb-0'>
              {tints.map((colorCode, i) => {
                const hex = colorCode;
                const num = i * 10;
                return <Palette key={`${num}-${hex}`} hex={hex} num={num} />;
              })}
            </div>
          </div>
        </div>
      </div>
      {exportModal ? (
        <ExportModal
          setExportModal={setExportModal}
          tints={tints}
          shades={shades}
          colorName={colorName}
        />
      ) : null}
    </section>
  );
};

export default Shades;
