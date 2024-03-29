import styled from "styled-components";
import { theme } from "globalStyles";

// index.tsx
export const Wrapper = styled.div`
  background-color: ${theme.palette.common.white};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacing(15)};

  ${theme.breakpoints.desktop} {
    gap: ${theme.spacing(10)};
  }

  ${theme.breakpoints.tablet} {
    flex-direction: column;
    gap: ${theme.spacing(5)};
  }
`;

export const Biography = styled.div`
  min-width: ${theme.spacing(40)};
  max-width: ${theme.spacing(70)};

  ${theme.breakpoints.tablet} {
    min-width: unset;
  }
`;

export const Title = styled.div`
  padding-bottom: ${theme.spacing(2)};
  ${theme.typography.body.lg};
  color: ${theme.palette.grey[150]};
`;

export const Paragraph = styled.p<{ cursive?: boolean }>`
  padding-bottom: ${theme.spacing(2)};
  font-style: ${(props) => (props.cursive ? "italic" : "normal")};
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing(2)};
`;

export const Portrait = styled.img`
  max-width: min(45%, ${theme.spacing(60)});
  max-height: ${theme.spacing(60)};
  margin: 0 auto;

  ${theme.breakpoints.tablet} {
    align-self: center;
    max-width: min(60%, ${theme.spacing(60)});
  }

  ${theme.breakpoints.phone} {
    max-width: min(80%, ${theme.spacing(60)});
  }
`;

// Skills.tsx
export const SkillsWrapper = styled.div`
  width: 100%;
  margin-top: -4%;
  background: ${theme.palette.grey[50]};
  clip-path: polygon(0 10vw, 100% 0, 100% 100%, 0 100%);

  h2 {
    margin-top: max(18vmin, ${theme.spacing(16)});
  }

  ${theme.breakpoints.tablet} {
    margin-top: -7.1vw;

    h2 {
      margin-top: max(18vmin, ${theme.spacing(14)});
    }
  }
`;

export const SkillsImg = styled.div`
  width: 100%;

  ${theme.breakpoints.custom(768, true)} {
    background: url(images/skills/desktop.png) center / contain no-repeat;
    margin-bottom: 11%;
    padding-bottom: 30.7%;
  }

  ${theme.breakpoints.tablet} {
    background: url(images/skills/tablet.png) center / contain no-repeat;
    margin-bottom: 14%;
    padding-bottom: 74%;
  }

  ${theme.breakpoints.phone} {
    background: url(images/skills/phone.png) center / contain no-repeat;
    margin-bottom: 17%;
    padding-bottom: 118.1%;
  }
`;
