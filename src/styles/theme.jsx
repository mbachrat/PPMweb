const extraFonts = 'Helvetica, Arial, sans-serif';

const spaceGroteskStack = `'Space Grotesk', ${extraFonts}`;

export const lightTheme = {
  maxWidth: '1280px',
  type: 'dark',
  main: {
    background: '#0B0D12',
    surface: '#10141B',
    card: '#1A1E25',
    elevated: '#252932',
    hover: '#2D3341',
    border: '#2F3540',
    accent: '#8EA1C1',
    highlight: '#FF9D1B',
    highlightSoft: '#FFB347',
    success: '#77D86B',
    shadow: '0 35px 120px rgba(0, 0, 0, 0.35)',
    fonts: {
      primary: '#F5F7FB',
      secondary: '#B6BECF',
      muted: '#8A93A5',
      high: '#FFFFFF',
      third: '#FF9D1B',
      four: '#1A1E25',
    },
    fontFamily: {
      light: `${spaceGroteskStack}, cyrLight, ${extraFonts}`,
      primary: `${spaceGroteskStack}, cyrRoman, ${extraFonts}`,
      med: `${spaceGroteskStack}, cyrMed, ${extraFonts}`,
      bold: `${spaceGroteskStack}, cyrBold, ${extraFonts}`,
      thin: `${spaceGroteskStack}, cyrLight, ${extraFonts}`,
    },
  },
  nav: {
    background: '#0F131A',
    surface: '#151A21',
    border: '#1F252F',
    fonts: {
      primary: '#F5F7FB',
      high: '#B6BECF',
      hover: '#FFFFFF',
    },
  },
};
