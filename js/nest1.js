import { nest2 } from "./nest2.js";
export const nest1 = () => {
  return "This is nest1 +" + nest2();
};
