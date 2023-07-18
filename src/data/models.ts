export interface TypeNavbar {
    id: number;
    item: string;
    href: string;
    icon: string;
  }
  export interface TypeDarkMode {
    IsdarkMode: boolean;
    setIsDarkMode: (value: boolean) => void;
    toggleIsDarkMode: () => void;
  }
  export interface contextDarkModeType {
    IsdarkMode: boolean;
    toggleIsDarkMode: () => void;
  }