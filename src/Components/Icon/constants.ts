export interface IconProps {
  icon: string;
  color?: string;
}

export interface IconList {
  [key: string]: JSX.Element;
}

export type Icons = (color: string) => IconList;
