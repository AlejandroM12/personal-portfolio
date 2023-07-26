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
  export interface TypeMyProjects {
    id: number;
  name: string;
  desc: string;
  img: string;
  link: string;
  github: string
  }
  export interface TypeMessageIsSent {
    sent: boolean;
    setSent: React.Dispatch<React.SetStateAction<boolean>>;
  }
  