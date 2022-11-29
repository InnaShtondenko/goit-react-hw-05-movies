export const theme = ({
  colors: {
    darkText: '#000000',
    lightText: '#494949',
    whiteText: '#fff',

    darkBG: '#ddd',
    lightBG: '#ccc',
    whiteBG: '#fff',

    mainAccent: '#ff7b00',
  },
  space: [0, '2px', '4px', '8px', '16px', '32px', '64px', '128px', '256px'],
  sizes: {},
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '20px',
    l: '22px',
    xl: '26px',
    xxl: '32px',
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  borders: {
    main: '1px solid #ccc',
  },
  radii: {
    none: '0',
    main: '6px',
    round: '50%',
  },
  shadows: {
    main:
      '0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)',
    text: '0px 0px 10px rgba(0, 0, 0, 1)',
  },
  breakPoints: {
    midMin: '480px',
    midMax: '767px',
    tabletMin: '768px',
    tabletMax: '1279px',
    desktopMin: '1280px',
    desctopMax: '1679px',
    bigMin: '1680px',
  },
  transitions: {
    color: 'color 300ms ease',
    backgroundColor: 'background-color 300ms ease',
  },
});