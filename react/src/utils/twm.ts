import { twMerge } from "tailwind-merge";

export default (className:string,overrideClassName?:string)=>twMerge(className,overrideClassName)
