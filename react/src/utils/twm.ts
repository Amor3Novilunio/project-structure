import { twMerge } from "tailwind-merge";

type breakpointTypes = {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
};

type twmType = {
  base: string;
  variant?: breakpointTypes;
  override?: {
    base?: string;
    variants?: breakpointTypes;
  };
};

export default ({ base, override, variant }: twmType) => {
  const compile = (bp?: breakpointTypes) =>
    bp ? Object.values(bp).filter(Boolean).join(" ") : "";

  return twMerge(
    base,
    override?.base,
    compile(variant),
    compile(override?.variants)
  );
};
