import React from "react";
import Headline from "components/Headline";
import { TypographyImg } from "./styles";

type Props = {
  imgName: string;
};

const Typography: React.FC<Props> = ({ imgName }: Props) => (
  <>
    <Headline>Typography</Headline>
    <TypographyImg src={`images/projects/typography/${imgName}.svg`} alt="Typography" />
  </>
);

export default Typography;
