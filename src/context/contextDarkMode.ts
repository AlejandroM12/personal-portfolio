import { contextDarkModeType } from "@/data";
import { createContext } from "react";


const iUserContextState: contextDarkModeType = {
  IsdarkMode: false,
  /* eslint-disable @typescript-eslint/no-empty-function */
  toggleIsDarkMode: () => {},
  
};

const contextDarkMode = createContext<contextDarkModeType>(iUserContextState);
export default contextDarkMode;
