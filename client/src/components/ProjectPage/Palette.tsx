import React from "react";
import Headline from "components/Headline";
import { PaletteWrapper, LeftColours, RightColours, Colour } from "./styles";

type Props = {
  palette: string[];
};

const Palette: React.FC<Props> = ({ palette }: Props) => {
  const leftColours = palette.slice(0, palette.length / 2);
  const rightColours = palette.slice(palette.length / 2, palette.length);

  const colourNumbers = rightColours.length;

  return (
    <>
      <Headline>Palette</Headline>
      <PaletteWrapper>
        <LeftColours>
          {leftColours.map((colour, index) => (
            <Colour key={`${colour}-${index}`} bg={colour} colourNumbers={colourNumbers} />
          ))}
        </LeftColours>
        <RightColours>
          {rightColours.map((colour, index) => (
            <Colour key={`${colour}-${index}`} bg={colour} colourNumbers={colourNumbers} />
          ))}
        </RightColours>
      </PaletteWrapper>
    </>
  );
};

export default Palette;
