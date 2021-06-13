import { useState, useEffect, FC, useRef } from "react";
import { useIntersect } from "utils/hooks";
import { CSSObject } from "styled-components";
import { Wrapper, Img, Bg } from "./styles";

type Props = {
  src: string;
  component?: "img" | "div";
  lazy?: boolean;
  style?: CSSObject;
  className?: string;
  alt?: string;
};

type ImgType = {
  loaded: boolean;
  src: string;
} | null;

const SuspenseImage: FC<Props> = ({ src, component = "img", lazy, style, className, alt }: Props) => {
  const [img, setImg] = useState<ImgType>(null);

  const [ref, entry] = useIntersect({ rootMargin: "500px" });

  const preloaderRef = useRef<HTMLImageElement | null>(null);

  const setPreloader = () => {
    preloaderRef.current = new Image();

    preloaderRef.current.onload = () =>
      setImg({
        loaded: true,
        src,
      });
    console.log("preloading!");
    preloaderRef.current.src = src;
  };

  useEffect(() => {
    if (!lazy && !preloaderRef?.current) {
      setPreloader();
    }

    return () => {
      if (preloaderRef?.current) preloaderRef.current.onload = null;
    };
  }, []);

  useEffect(() => {
    if (lazy && !preloaderRef?.current && entry?.isIntersecting) {
      setPreloader();
    }
  }, [entry]);

  return (
    <Wrapper ref={ref}>
      {img &&
        (component === "img" ? (
          <Img
            src={img.src}
            style={{
              ...style,
              opacity: img.loaded ? 1 : 0,
            }}
            className={className}
            alt={alt}
          />
        ) : (
          <Bg
            style={{
              ...style,
              background: `url(${img.src})${style?.background ? `, ${style.background}` : ""}`,
              opacity: img.loaded ? 1 : 0,
            }}
            className={className}
          />
        ))}
    </Wrapper>
  );
};

export default SuspenseImage;
