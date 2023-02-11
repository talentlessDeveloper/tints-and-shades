import React, { useState } from "react";

const Form = ({
  setColor,
}: {
  setColor: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [inputColor, setInputColor] = useState<string>("#82bd69");
  return (
    <form
      className='flex gap-x-2 justify-center'
      onSubmit={(e) => {
        e.preventDefault();
        setColor(inputColor);
      }}
    >
      <label htmlFor='color' className='sr-only'>
        HexCode,Rgb, Hsl
      </label>
      <input
        type='text'
        name='color'
        id='color'
        value={inputColor}
        onChange={(e) => setInputColor(e.target.value)}
        className='px-3 py-2 text-gray-900  rounded-md border-solid border-2 border-gray-700 w-2/3 md:py-3'
      />
      <button
        type='submit'
        className='bg-gray-50 text-gray-900 py-2 px-3 font-mono text-lg rounded-md'
      >
        Generate
      </button>
    </form>
  );
};

export default Form;
