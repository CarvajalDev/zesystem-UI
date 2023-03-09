const fs = require('fs'); //use for create files like .css
const jsonData = require('../figma/token.json'); // recive Design Tokens json file


const styleLite = {
  "brands": [
    {
      "name": "ze",
      "colors": {
        "primary50": `${jsonData.global.ze.primary[50].value}`,
        "secondary50": `${jsonData.global.ze.secondary[50].value}`,
        "secondary300": `${jsonData.global.ze.secondary[300].value}`,
        "tertiary50": `${jsonData.global.ze.tertiary[50].value}`,
        "tertiary100": `${jsonData.global.ze.tertiary[100].value}`,
        "tertiary200": `${jsonData.global.ze.tertiary[200].value}`,
        "tertiary300": `${jsonData.global.ze.tertiary[300].value}`,
        "tertiary400": `${jsonData.global.ze.tertiary[400].value}`,
        "tertiary500": `${jsonData.global.ze.tertiary[500].value}`,
        "tertiary600": `${jsonData.global.ze.tertiary[600].value}`,
        "tertiary700": `${jsonData.global.ze.tertiary[700].value}`,
        "tertiary800": `${jsonData.global.ze.tertiary[800].value}`,
        "tertiary900": `${jsonData.global.ze.tertiary[900].value}`,
        "neutral50": `${jsonData.global.ze.neutral[50].value}`,
        "neutral100": `${jsonData.global.ze.neutral[100].value}`,
        "neutral200": `${jsonData.global.ze.neutral[200].value}`,
        "neutral300": `${jsonData.global.ze.neutral[300].value}`,
        "neutral400": `${jsonData.global.ze.neutral[400].value}`,
        "neutral500": `${jsonData.global.ze.neutral[500].value}`,
        "neutral600": `${jsonData.global.ze.neutral[600].value}`,
        "status50": `${jsonData.global.ze.status[50].value}`,
        "status300": `${jsonData.global.ze.status[300].value}`,
        "status500": `${jsonData.global.ze.status[500].value}`
      },
      "buttonPrimary": {
        "bgColor": `${jsonData.global.ze.secondary[300].value}`,
        "textColor": `${jsonData.global.ze.neutral[50].value}`,
        "hoverColor": `${jsonData.global.ze.fill.color['button-primary'].hover[50].value}`,
      },      
      "buttonSecondary": {
        "bgColor": `${jsonData.global.ze.neutral[200].value}`,
        "textColor": `${jsonData.global.ze.secondary[300].value}`,
        "hoverColor": `${jsonData.global.ze.secondary[300].value}`,
      },
      "buttonTertiary": {
        "bgColor": `${jsonData.global.ze.secondary[50].value}`,
        "textColor": `${jsonData.global.ze.neutral[50].value}`,
        "hoverColor": `${jsonData.global.ze.tertiary[100].value}`,
      }, 
      "typography": {
        "font1": `${jsonData.global.fontFamilies['times-new-roman'].value}`,
        "font2": `${jsonData.global.fontFamilies['helvetica-neue'].value}`
      },
      "radius": {
        "small": `${jsonData.global.ze.border.radius.small.value}`,
        "medium": `${jsonData.global.ze.border.radius.medium.value}`,
        "large": `${jsonData.global.ze.border.radius.large.value}`,
      },
      "desktopFontSize": {
        "h1": `${jsonData.global.fontSize[16].value}`,
        "h2": `${jsonData.global.fontSize[15].value}`,
        "h3": `${jsonData.global.fontSize[12].value}`,
        "h4": `${jsonData.global.fontSize[9].value}`,
        "h5": `${jsonData.global.fontSize[5].value}`,
        "h6": `${jsonData.global.fontSize[4].value}`,
        "bodyLarge": `${jsonData.global.fontSize[4].value}`,
        "bodyMedium": `${jsonData.global.fontSize[3].value}`,
        "bodySmall": `${jsonData.global.fontSize[1].value}`
      },
      "mobileFontSize": {
        "h1": `${jsonData.global.fontSize[15].value}`,
        "h2": `${jsonData.global.fontSize[12].value}`,
        "h3": `${jsonData.global.fontSize[9].value}`,
        "h4": `${jsonData.global.fontSize[5].value}`,
        "h5": `${jsonData.global.fontSize[4].value}`,
        "h6": `${jsonData.global.fontSize[3].value}`,
        "bodyLarge": `${jsonData.global.fontSize[3].value}`,
        "bodyMedium": `${jsonData.global.fontSize[2].value}`,
        "bodySmall": `${jsonData.global.fontSize[0].value}`
      }
    },
    {
      "name": "luuna",
      "colors": {
        "primary50": `${jsonData.global.luuna.primary[50].value}`,
        "primary300": `${jsonData.global.luuna.primary[300].value}`,
        "primary500": `${jsonData.global.luuna.primary[500].value}`,
        "secondary50": `${jsonData.global.luuna.secondary[50].value}`,
        "secondary300": `${jsonData.global.luuna.secondary[300].value}`,
        "tertiary50": `${jsonData.global.luuna.tertiary[50].value}`,
        "tertiary300": `${jsonData.global.luuna.tertiary[300].value}`,
        "tertiary500": `${jsonData.global.luuna.tertiary[500].value}`,
        "tertiary700": `${jsonData.global.luuna.tertiary[700].value}`,
        "tertiary900": `${jsonData.global.luuna.tertiary[900].value}`,
        "neutral50": `${jsonData.global.luuna.neutral[50].value}`
      },
      "buttonPrimary": {
        "bgColor": `${jsonData.global.luuna.primary[300].value}`,
        "textColor": `${jsonData.global.ze.neutral[50].value}`,
        "hoverColor": `${jsonData.global.luuna.fill.color['button-primary'].hover[50].value}`,
      },      
      "buttonSecondary": {
        "bgColor": `${jsonData.global.luuna.primary[300].value}`,
        "textColor": `${jsonData.global.luuna.primary[300].value}`,
        "hoverColor": `${jsonData.global.luuna.primary[500].value}`,
      },
      "buttonTertiary": {
        "bgColor": `${jsonData.global.luuna.secondary[300].value}`,
        "textColor": `${jsonData.global.ze.neutral[50].value}`,
        "hoverColor": `${jsonData.global.luuna.fill.color['button-secondary'].hover[50].value}`,
      }, 
      "typography": {
        "font1": `${jsonData.global.fontFamilies['hurme-geometric-sans-3'].value}`,
        "font2": `${jsonData.global.fontFamilies['noto-sans'].value}`
      },
      "radius": {
        "small": `${jsonData.global.luuna.border.radius.default.value}`,
        "medium": `${jsonData.global.luuna.border.radius.default.value}`,
        "large": `${jsonData.global.luuna.border.radius.default.value}`
      },
      "desktopFontSize": {
        "h1": `${jsonData.global.fontSize[12].value}`,
        "h2": `${jsonData.global.fontSize[11].value}`,
        "h3": `${jsonData.global.fontSize[10].value}`,
        "h4": `${jsonData.global.fontSize[9].value}`,
        "h5": `${jsonData.global.fontSize[6].value}`,
        "h6": `${jsonData.global.fontSize[4].value}`,
        "bodyLarge": `${jsonData.global.fontSize[4].value}`,
        "bodyMedium": `${jsonData.global.fontSize[3].value}`,
        "bodySmall": `${jsonData.global.fontSize[2].value}`
      },
      "mobileFontSize": {
        "h1": `${jsonData.global.fontSize[15].value}`,
        "h2": `${jsonData.global.fontSize[12].value}`,
        "h3": `${jsonData.global.fontSize[9].value}`,
        "h4": `${jsonData.global.fontSize[5].value}`,
        "h5": `${jsonData.global.fontSize[4].value}`,
        "h6": `${jsonData.global.fontSize[3].value}`,
        "bodyLarge": `${jsonData.global.fontSize[3].value}`,
        "bodyMedium": `${jsonData.global.fontSize[2].value}`,
        "bodySmall": `${jsonData.global.fontSize[0].value}`
      }
    },
    {
      "name": "nooz",
      "colors": {
        "primary50": `${jsonData.global.nooz.primary[50].value}`,
        "primary300": `${jsonData.global.nooz.primary[300].value}`,
        "secondary50": `${jsonData.global.nooz.secondary[50].value}`, 
        "tertiary50": `${jsonData.global.nooz.tertiary[50].value}`,
        "tertiary300": `${jsonData.global.nooz.tertiary[50].value}`,
        "neutral50": `${jsonData.global.nooz.neutral[50].value}`,
        "neutral300": `${jsonData.global.nooz.neutral[300].value}`
      },
      "buttonPrimary": {
        "bgColor": `${jsonData.global.nooz.primary[50].value}`,
        "textColor": `${jsonData.global.ze.neutral[50].value}`,
        "hoverColor": `${jsonData.global.nooz.tertiary[300].value}`,
      },      
      "buttonSecondary": {
        "bgColor": `${jsonData.global.nooz.primary[50].value}`,
        "textColor": `${jsonData.global.nooz.primary[50].value}`,
        "hoverColor": `${jsonData.global.nooz.primary[50].value}`,
      },
      "buttonTertiary": {
        "bgColor": `${jsonData.global.nooz.secondary[50].value}`,
        "textColor": `${jsonData.global.ze.neutral[50].value}`,
        "hoverColor": `${jsonData.global.nooz.fill.color['button-secondary'].hover[50].value}`,
      }, 
      "typography": {
        "font1": `${jsonData.global.fontFamilies['galano-grotesque'].value}`,
        "font2": `${jsonData.global.fontFamilies['effra'].value}`
      },
      "radius": {
        "small": `${jsonData.global.nooz.border.radius.default.value}`,
        "medium": `${jsonData.global.nooz.border.radius.default.value}`,
        "large": `${jsonData.global.nooz.border.radius.default.value}`
      },
      "desktopFontSize": {
        "h1": `${jsonData.global.fontSize[14].value}`,
        "h2": `${jsonData.global.fontSize[11].value}`,
        "h3": `${jsonData.global.fontSize[9].value}`,
        "h4": `${jsonData.global.fontSize[6].value}`,
        "h5": `${jsonData.global.fontSize[5].value}`,
        "h6": `${jsonData.global.fontSize[4].value}`,
        "bodyLarge": `${jsonData.global.fontSize[4].value}`,
        "bodyMedium": `${jsonData.global.fontSize[3].value}`,
        "bodySmall": `${jsonData.global.fontSize[2].value}`
      },
      "mobileFontSize": {
        "h1": `${jsonData.global.fontSize[13].value}`,
        "h2": `${jsonData.global.fontSize[10].value}`,
        "h3": `${jsonData.global.fontSize[8].value}`,
        "h4": `${jsonData.global.fontSize[5].value}`,
        "h5": `${jsonData.global.fontSize[4].value}`,
        "h6": `${jsonData.global.fontSize[3].value}`,
        "bodyLarge": `${jsonData.global.fontSize[3].value}`,
        "bodyMedium": `${jsonData.global.fontSize[2].value}`,
        "bodySmall": `${jsonData.global.fontSize[0].value}`
      }
    },
    {
      "name": "mappa",
      "colors": {
        "primary50": `${jsonData.global.mappa.primary[50].value}`,
        "primary300": `${jsonData.global.mappa.primary[300].value}`,
        "secondary50": `${jsonData.global.mappa.secondary[50].value}`,
        "tertiary50": `${jsonData.global.mappa.tertiary[50].value}`,
        "tertiary300": `${jsonData.global.mappa.tertiary[300].value}`,
        "tertiary500": `${jsonData.global.mappa.tertiary[500].value}`,
        "tertiary700": `${jsonData.global.mappa.tertiary[700].value}`,
        "neutral50": `${jsonData.global.mappa.neutral[50].value}`
      },
      "buttonPrimary": {
        "bgColor": `${jsonData.global.mappa.primary[50].value}`,
        "textColor": `${jsonData.global.ze.neutral[50].value}`,
        "hoverColor": `${jsonData.global.mappa.fill.color['button-primary'].hover[50].value}`,
      },      
      "buttonSecondary": {
        "bgColor": `${jsonData.global.mappa.primary[50].value}`,
        "textColor": `${jsonData.global.mappa.primary[50].value}`,
        "hoverColor": `${jsonData.global.mappa.primary[50].value}`,
      },
      "buttonTertiary": {
        "bgColor": `${jsonData.global.mappa.secondary[50].value}`,
        "textColor": `${jsonData.global.ze.neutral[50].value}`,
        "hoverColor": `${jsonData.global.mappa.fill.color['button-secondary'].hover[50].value}`,
      },
      "typography": {
        "font1": `${jsonData.global.fontFamilies['nt-dapper-'].value}`,
        "font2": `${jsonData.global.fontFamilies['source-sans-pro'].value}`,
        "font3": `${jsonData.global.fontFamilies['ibm-plex-mono'].value}`
      },
      "radius": {
        "small": `${jsonData.global.mappa.border.radius.default.value}`,
        "medium": `${jsonData.global.mappa.border.radius.default.value}`,
        "large": `${jsonData.global.mappa.border.radius.default.value}`
      },
      "desktopFontSize": {
        "h1": `${jsonData.global.fontSize[18].value}`,
        "h2": `${jsonData.global.fontSize[16].value}`,
        "h3": `${jsonData.global.fontSize[14].value}`,
        "h4": `${jsonData.global.fontSize[11].value}`,
        "h5": `${jsonData.global.fontSize[8].value}`,
        "h6": `${jsonData.global.fontSize[4].value}`,
        "bodyLarge": `${jsonData.global.fontSize[4].value}`,
        "bodyMedium": `${jsonData.global.fontSize[3].value}`,
        "bodySmall": `${jsonData.global.fontSize[2].value}`
      },
      "mobileFontSize": {
        "h1": `${jsonData.global.fontSize[17].value}`,
        "h2": `${jsonData.global.fontSize[14].value}`,
        "h3": `${jsonData.global.fontSize[13].value}`,
        "h4": `${jsonData.global.fontSize[10].value}`,
        "h5": `${jsonData.global.fontSize[5].value}`,
        "h6": `${jsonData.global.fontSize[3].value}`,
        "bodyLarge": `${jsonData.global.fontSize[4].value}`,
        "bodyMedium": `${jsonData.global.fontSize[3].value}`,
        "bodySmall": `${jsonData.global.fontSize[2].value}`
      }
    }
  ]
}

//console.log(styleLite.brands[0].buttonTertiary.bgColor);
//console.log(styleLite.brands[0].buttonTertiary.textColor);
//console.log(styleLite.brands[0].buttonTertiary.hoverColor);
console.log(jsonData.global.componentSize.xlarge);

for (let brand of styleLite.brands) {
  // Create a CSS template with name ZSlite-brand for each brand
  const zeSystenLite = `
    :root {
      --brand-typography-font1: "${brand.typography.font1}";
      --brand-typography-font2: "${brand.typography.font2}";
      --brand-typography-font3: "${brand.typography.font3}";

      --font-size-d-h1:${brand.desktopFontSize.h1}px;
      --font-size-d-h2:${brand.desktopFontSize.h2}px;
      --font-size-d-h3:${brand.desktopFontSize.h3}px;
      --font-size-d-h4:${brand.desktopFontSize.h4}px;
      --font-size-d-h5:${brand.desktopFontSize.h5}px;
      --font-size-d-h6:${brand.desktopFontSize.h6}px;
      --font-size-d-p-regular:${brand.desktopFontSize.bodyLarge}px;
      --font-size-d-p-medium:${brand.desktopFontSize.bodyMedium}px;
      --font-size-d-p-small:${brand.desktopFontSize.bodySmall}px;

      --font-size-m-h1:${brand.desktopFontSize.h1}px;
      --font-size-m-h2:${brand.desktopFontSize.h2}px;
      --font-size-m-h3:${brand.desktopFontSize.h3}px;
      --font-size-m-h4:${brand.desktopFontSize.h4}px;
      --font-size-m-h5:${brand.desktopFontSize.h5}px;
      --font-size-m-h6:${brand.desktopFontSize.h6}px;
      --font-size-m-p-regular:${brand.desktopFontSize.bodyLarge}px;
      --font-size-m-p-medium:${brand.desktopFontSize.bodyMedium}px;
      --font-size-m-p-small:${brand.desktopFontSize.bodySmall}px;

      /* New scale relative size to web responsive design */
      --font-size-relative-h1:${jsonData.global.relativeSize.h1.value};
      --font-size-relative-h2:${jsonData.global.relativeSize.h2.value};
      --font-size-relative-h3:${jsonData.global.relativeSize.h3.value};
      --font-size-relative-h4:${jsonData.global.relativeSize.h4.value};
      --font-size-relative-h5:${jsonData.global.relativeSize.h5.value};
      --font-size-relative-h6:${jsonData.global.relativeSize.h6.value};
      --font-size-relative-p:${jsonData.global.relativeSize.p.value};

      /* font weight */
      --font-weight-light:300;
      --font-weight-regular:400;
      --font-weight-medium:500;
      --font-weight-semibold:600;
      --font-weight-bold:700;

      /* Color Palette */
      --brand-color-primary50: ${brand.colors.primary50};
      --brand-color-primary300: ${brand.colors.primary300};
      --brand-color-primary500: ${brand.colors.primary500};
      --brand-color-secondary50: ${brand.colors.secondary50};
      --brand-color-secondary300: ${brand.colors.secondary300};
      --brand-color-secondary500: ${brand.colors.secondary500};
      --brand-color-tertiary50: ${brand.colors.tertiary50};
      --brand-color-tertiary100: ${brand.colors.tertiary100};
      --brand-color-tertiary200: ${brand.colors.tertiary200};
      --brand-color-tertiary300: ${brand.colors.tertiary300};
      --brand-color-tertiary400: ${brand.colors.tertiary400};
      --brand-color-tertiary500: ${brand.colors.tertiary500};
      --brand-color-tertiary600: ${brand.colors.tertiary600};
      --brand-color-tertiary700: ${brand.colors.tertiary700};
      --brand-color-tertiary800: ${brand.colors.tertiary800};
      --brand-color-tertiary900: ${brand.colors.tertiary900};
      --brand-color-neutral50: ${brand.colors.neutral50};
      --brand-color-neutral100: ${brand.colors.neutral100};
      --brand-color-neutral200: ${brand.colors.neutral200};
      --brand-color-neutral300: ${brand.colors.neutral300};
      --brand-color-neutral400: ${brand.colors.neutral400};
      --brand-color-neutral500: ${brand.colors.neutral500};
      --brand-color-neutral600: ${brand.colors.neutral600};

      /* Color Gray Scale */
      --brand-color-gray50: ${styleLite.brands[0].colors.neutral50};
      --brand-color-gray100: ${styleLite.brands[0].colors.neutral100};
      --brand-color-gray200: ${styleLite.brands[0].colors.neutral200};
      --brand-color-gray300: ${styleLite.brands[0].colors.neutral300};
      --brand-color-gray400: ${styleLite.brands[0].colors.neutral400};
      --brand-color-gray500: ${styleLite.brands[0].colors.neutral500};
      --brand-color-gray600: ${styleLite.brands[0].colors.neutral600};

      --brand-color-status50: ${styleLite.brands[0].colors.status50};
      --brand-color-status300: ${styleLite.brands[0].colors.status300};
      --brand-color-status500: ${styleLite.brands[0].colors.status500};

      --brand-color-buttonPrimary-bg: ${brand.buttonPrimary.bgColor};
      --brand-color-buttonPimary-txt: ${brand.buttonPrimary.textColor};
      --brand-color-buttonPimary-hvr: ${brand.buttonPrimary.hoverColor};

      --brand-color-buttonSecondary-bg: ${brand.buttonSecondary.bgColor};
      --brand-color-buttonSecondary-txt: ${brand.buttonSecondary.textColor};
      --brand-color-buttonSecondary-hvr: ${brand.buttonSecondary.hoverColor};

      --brand-color-buttonTertiary-bg: ${brand.buttonTertiary.bgColor};
      --brand-color-buttonTertiary-txt: ${brand.buttonTertiary.textColor};
      --brand-color-buttonTertiary-hvr: ${brand.buttonTertiary.hoverColor};

      /* Border Radius size */
      --brand-radius-small: ${brand.radius.small};
      --brand-radius-medium: ${brand.radius.medium};
      --brand-radius-large: ${brand.radius.large};

      /* Buttons & inputs size height */
      --component-size-xsmall: ${jsonData.global.componentSize.xsmall.value};
      --component-size-small: ${jsonData.global.componentSize.small.value};
      --component-size-medium: ${jsonData.global.componentSize.medium.value};
      --component-size-large: ${jsonData.global.componentSize.large.value};
      --component-size-xlarge: ${jsonData.global.componentSize.xlarge.value};

      /* Image size height (png, jpg, jpeg) */
      --img-size-height-xsmall: ${jsonData.global.imageHeight.xsmall.value};
      --img-size-height-small: ${jsonData.global.imageHeight.small.value};
      --img-size-height-medium: ${jsonData.global.imageHeight.medium.value};
      --img-size-height-large: ${jsonData.global.imageHeight.large.value};
      --img-size-height-xlarge: ${jsonData.global.imageHeight.xlarge.value};
      --img-size-height-xxlarge: ${jsonData.global.imageHeight.xxlarge.value};

      /* Image size width (png, jpg, jpeg) */
      --img-size-width-xsmall: ${jsonData.global.imageWidth.xsmall.value};
      --img-size-width-small: ${jsonData.global.imageWidth.small.value};
      --img-size-width-medium: ${jsonData.global.imageWidth.medium.value};
      --img-size-width-large: ${jsonData.global.imageWidth.large.value};
      --img-size-width-xlarge: ${jsonData.global.imageWidth.xlarge.value};
      --img-size-width-xxlarge: ${jsonData.global.imageWidth.xxlarge.value};
      
    } 

    .brand-${brand.name.toLowerCase()} h1 {
      font-family: var(--brand-typography-font1);
      font-size: var(--font-size-d-h1);
    }

    .brand-${brand.name.toLowerCase()} h2 {
      font-family: var(--brand-typography-font1);
      font-size: var(--font-size-d-h2);
    }

    .brand-${brand.name.toLowerCase()} h3 {
      font-family: var(--brand-typography-font1);
      font-size: var(--font-size-d-h3);
    }

    .brand-${brand.name.toLowerCase()} h4 {
      font-family: var(--brand-typography-font1);
      font-size: var(--font-size-d-h4);
    }

    .brand-${brand.name.toLowerCase()} h5 {
      font-family: var(--brand-typography-font1);
      font-size: var(--font-size-d-h5);
    }

    .brand-${brand.name.toLowerCase()} h6 {
      font-family: var(--brand-typography-font2);
      font-size: var(--font-size-d-h6);
    }

    .brand-${brand.name.toLowerCase()} p {
      font-family: var(--brand-typography-font2);
      font-size: var(--font-size-d-p-regular);
    }

    .button-primary{
      background-color: var(--brand-color-buttonPrimary-bg);
      border: none;
      color: var(--brand-color-buttonPimary-txt);
      padding: 16px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: var(--font-size-d-p-medium);
      font-family: var(--brand-typography-font2);
      border-radius: var(--brand-radius-medium);
      height: var(--component-size-medium);
      transition-duration: 0.4s;
    }

    .button-primary:hover {
      background-color: var(--brand-color-buttonPimary-hvr);
    }

    .button-secondary{      
      background-color: white;
      border: 1px solid var(--brand-color-buttonPrimary-bg);
      color: var(--brand-color-buttonSecondary-txt);
      padding: 16px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: var(--font-size-d-p-medium);
      font-family: var(--brand-typography-font2);
      border-radius: var(--brand-radius-medium);
      height: var(--component-size-medium);
      transition-duration: 0.4s;
    }

    .button-secondary:hover {
      border:1px solid var(--brand-color-buttonSecondary-hvr);
      opacity:0.7;
    }

    .button-tertiary{      
      background-color: var(--brand-color-buttonTertiary-bg);
      border: none;
      color: var(--brand-color-buttonTertiary-txt);
      padding: 16px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: var(--font-size-d-p-medium);
      font-family: var(--brand-typography-font2);
      border-radius: var(--brand-radius-medium);
      height: var(--component-size-medium);
      transition-duration: 0.4s;
    }

    .button-tertiary:hover {
      background-color: var(--brand-color-buttonTertiary-hvr);
    }

    .button-disabled{
      background-color: var(--brand-color-gray300);
      border: none;
      color: var(--brand-color-gray500);
      padding: 16px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: var(--font-size-d-p-medium);
      font-family: var(--brand-typography-font2);
      border-radius: var(--brand-radius-medium);
      height: var(--component-size-medium);
      transition-duration: 0.4s;
    }

    .input-container {
      position: relative;
     }

     input {
         height: var(--component-size-large);
         width: 324px;
         border: 1px solid var(--brand-color-gray400);
         border-radius: var(--brand-radius-small);
         box-sizing: border-box;
         padding: 16px;
     }

     input:hover {
        border: 1px solid var(--brand-color-buttonPrimary-bg);
     }

     .label {
         position: absolute;
         top: 0;
         bottom: 0;
         left: 16px;
         display: flex;
         align-items: center;
         pointer-events: none;
     }

     input, .label .text {
         font-family: var(--brand-typography-font2);
         font-size: var(--font-size-d-p-medium);
     }

     .label .text {
         transition: all 0.15s ease-out;
         color: var(--brand-color-gray500);
     }

     input:focus {
         outline: none;
         border: 2px solid var(--brand-color-buttonPrimary-bg);
     }

     input:focus + .label .text, :not(input[value=""]) + .label .text {
         font-size: 12px;
         transform: translate(0, -180%);
         background-color: white;
         padding-left: 4px;
         padding-right: 4px;
     }

     input:focus + .label .text {
         color: var(--brand-color-buttonPrimary-bg);
     }

    @media (max-width: 640px) { 
      .brand-${brand.name.toLowerCase()} h1 {
        font-size: var(--font-size-m-h1);
      }
  
      .brand-${brand.name.toLowerCase()} h2 {
        font-size: var(--font-size-m-h2);
      }
  
      .brand-${brand.name.toLowerCase()} h3 {
        font-size: var(--font-size-m-h3);
      }
  
      .brand-${brand.name.toLowerCase()} h4 {
        font-size: var(--font-size-m-h4);
      }
  
      .brand-${brand.name.toLowerCase()} h5 {
        font-size: var(--font-size-m-h5);
      }
  
      .brand-${brand.name.toLowerCase()} h6 {
        font-size: var(--font-size-m-h6);
      }
  
      .brand-${brand.name.toLowerCase()} p {
        font-size: var(--font-size-m-p-regular);
      }
     }

  `

  // Write the Zslite CSS template to a file
  fs.writeFile(`./packages/ZSLite-${brand.name.toLowerCase()}.css`, zeSystenLite, (err) => {
    if (err) throw err
    console.log(`Created CSS file for ${brand.name}`)
  })
}