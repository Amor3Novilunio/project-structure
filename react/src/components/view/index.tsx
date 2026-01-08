import type { ClassNameTypes } from "@/types/component.type";
import twm from "@/utils/twm";
import type { ReactNode } from "preact/compat";

type imageType = {
  children: ReactNode;
} & ClassNameTypes;

export default ({ children, className, overrideClassName }: imageType) => (
  <div className={twm(className, overrideClassName)}>{children}</div>
);
