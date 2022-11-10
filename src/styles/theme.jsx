const extraFonts = 'Helvetica, Arial, sans-serif';

export const lightTheme = {
    maxWidth: '1440px',
    type: 'dark',
    main: {
      background: 'rgb(253, 253, 253)',
      hover: 'white',
      fonts: {
        primary: 'rgb(19, 19, 19)',
        secondary: 'rgb(50, 50, 50)',
      },
      fontFamily: {
        light: `cyrLight, ${extraFonts}`,
        primary: `cyrHeavy, ${extraFonts}`,
        med: `cyrMed, ${extraFonts}`,
        bold: `cyrBold, ${extraFonts}`,
      },
    },
    // nav: {
    //   background: 'rgba(0, 0, 0, 0.5)',
    //   fonts: {
    //     primary: 'rgb(182, 182, 182)',
    //     hover: 'rgb(212, 212, 212)',
    //   },
    // },
  };