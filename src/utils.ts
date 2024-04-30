import { Validator, CSSProps } from "./constants";

/** Hooks */
export const useValidatorsAPI = async (): Promise<Validator[]> => {
  const response = await fetch(
    "https://skip-select.s3.amazonaws.com/osmosis/validators.json"
  );
  const validators = await response.json();
  return validators;
};

export const useDetectOS = () => {
  let userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "mac";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "ios";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "windows";
  } else if (/Android/.test(userAgent)) {
    os = "android";
  } else if (!os && /Linux/.test(platform)) {
    os = "linux";
  }

  return os;
};

/** Functions */
export const getCSS = (props: CSSProps) => `
    ${props.display && `display: ${props.display}`};
    ${props.height && `height: ${props.height}`};
    ${props.width && `width: ${props.width}`};
    ${props.justify && `justify-content: ${props.justify}`};
    ${props.alignItems && `align-items: ${props.alignItems}`};
    ${props.alignContent && `align-content: ${props.alignContent}`};
    ${props.gap && `gap: ${props.gap}`};
    ${props.position && `position: ${props.position}`};
    ${props.background && `background: ${props.background}`};
    ${props.color && `color: ${props.color}`};
    ${props.border && `border: ${props.border}`};
    ${props.borderRadius && `border-radius: ${props.borderRadius}`};
    ${props.p && `padding: ${props.p}`};
    ${props.pt && `padding-top: ${props.pt}`};
    ${props.pr && `padding-right: ${props.pr}`};
    ${props.pb && `padding-bottom: ${props.pb}`};  
    ${props.pl && `padding-pl: ${props.pl}`};
    ${props.m && `margin: ${props.m}`};
    ${props.mt && `margin-top: ${props.mt}`};
    ${props.mr && `margin-right: ${props.mr}`};
    ${props.mb && `margin-bottom: ${props.mb}`};  
    ${props.ml && `margin-pl: ${props.ml}`};
    ${props.i && `inset: ${props.i}`};
    ${props.t && `top: ${props.t}`};
    ${props.r && `right: ${props.r}`};
    ${props.b && `bottom: ${props.b}`};  
    ${props.l && `pl: ${props.l}`};
    `;
