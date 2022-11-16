const extraFonts = 'Helvetica, Arial, sans-serif';

export const lightTheme = {
    maxWidth: '1440px',
    type: 'dark',
    main: {
      background: '#f9f9f9',
      hover: 'white',
      fonts: {
        primary: 'rgb(19, 19, 19)',
        secondary: '#152E66',
        third: '#0699CD',
      },
      fontFamily: {
        light: `cyrLight, ${extraFonts}`,
        primary: `cyrHeavy, ${extraFonts}`,
        med: `cyrMed, ${extraFonts}`,
        bold: `cyrBold, ${extraFonts}`,
        xlight: `cyrExtraLight, ${extraFonts}`,
      },
    },
    nav: {
      background: '#f9f9f9',
      fonts: {
        primary: 'rgb(19, 19, 19)',
        hover: 'rgb(212, 212, 212)',
      },
    },
  };