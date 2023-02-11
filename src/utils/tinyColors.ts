import tinycolor from "tinycolor2";

type RgbProps = {
  r: number;
  g: number;
  b: number;
  a?: number;
};

export const useTinyColors = (color: string) => {
  const tinyColor = tinycolor(color);
  const rgb = tinyColor.toRgb();

  const newTints = ({ r, g, b }: RgbProps, shadeF: number) => {
    const red = r + (255 - r) * shadeF;
    const green = g + (255 - g) * shadeF;
    const blue = b + (255 - b) * shadeF;
    const result = tinycolor(`rgb(${red},${green},${blue})`).toHexString();

    return result;
  };

  const newShades = ({ r, g, b }: RgbProps, shadeF: number) => {
    const red = r * shadeF;
    const green = g * shadeF;
    const blue = b * shadeF;
    const result = tinycolor(`rgb(${red},${green},${blue})`).toHexString();

    return result;
  };

  const tints = Array.from({ length: 10 }, (_, i) => 1 - (i / 10 + 0.1)).map(
    (num) => {
      return newTints(rgb, num);
    }
  );

  const shades = Array.from({ length: 10 }, (_, i) => 1 - (i / 10 + 0.1)).map(
    (num) => {
      return newShades(rgb, num);
    }
  );

  return { tints, shades };
};

// const generateTints = ({ r, g, b }: RgbProps, shadeF: number) => {
//   const max = Math.max(Math.max(r, Math.max(g, b)), 1);

//   const step = 255 / (max * 10);
//   const red = r * step * shadeF;
//   const green = g * step * shadeF;
//   const blue = b * step * shadeF;

//   const result = tinycolor(`rgb(${red},${green},${blue})`).toHexString();
//   return result;
//   //  (r * step, g * step, b * step)(r * step * 2, g * step * 2, b * step * 2)(
//   //    r * step * 3,
//   //    g * step * 3,
//   //    b * step * 3
//   //  );
// };

//  const generatedTints = Array.from(
//    { length: 10 },
//    (_, i) => 10 - (i + 0.25)
//  ).map((num) => {
//    return generateTints(rgb, num);
//  });

//  const generatedShades = Array.from(
//    { length: 10 },
//    (_, i) => 12 - (i + 0.1)
//  ).map((num) => {
//    return newShades(rgb, num);
//  });
