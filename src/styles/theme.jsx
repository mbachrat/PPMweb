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
        four: '#F6F6F6',
      },
      fontFamily: {
        light: `cyrLight, ${extraFonts}`,
        primary: `cyrHeavy, ${extraFonts}`,
        med: `cyrMed, ${extraFonts}`,
        bold: `cyrBold, ${extraFonts}`,
       
      },
    },
    nav: {
      background: '#f9f9f9',
      fonts: {
        primary: 'rgb(19, 19, 19)',
        high: 'rgb(83, 83, 83)',
        hover: 'rgba(80, 80, 80, 0.725)',
      },
    },
  };