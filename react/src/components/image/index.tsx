import type { ClassNameTypes } from "@/types/component.type";
import twm from "@/utils/twm";

type imageType = {
  src: string;
  alt?: string;
  srcset?: string;
} & ClassNameTypes;


export default ({
  alt,
  src,
  srcset,
  className,
  overrideClassName,
}: imageType) => (
  <img
    src={src}
    alt={alt}
    srcset={srcset}
    className={twm(className, overrideClassName)}
  />
);
