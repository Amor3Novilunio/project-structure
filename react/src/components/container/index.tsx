import type { ClassNameTypes } from "@/types/component.type";
import twm from "@/utils/twm";
import type { ReactNode } from "preact/compat";

type ContainerType = {
  children: ReactNode;
} & ClassNameTypes;

export default ({ children,className,overrideClassName }: ContainerType) => {
  return <div className={twm(className,overrideClassName)}>{children}</div>;
};
