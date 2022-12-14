import {createTheme} from '@mui/material/styles';
import UbuntuRegularTtf from './assets/fonts/Ubuntu-Regular.ttf';

const theme = createTheme({
  typography: {
    fontFamily: 'UbuntuRegular,Arial',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1440,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
              @font-face {
                font-family: 'UbuntuRegular';
                font-style: normal;
                font-weight: 400;
                src: "url(${UbuntuRegularTtf}) format('ttf')";
              }
            `,
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.pageTitle': {
            display: 'flex',
            fontSize: '1.8em',
            letterSpacing: '0.25px',
            position: 'relative',
            '.pageBack': {
              color: '#fff',
              position: 'absolute',
              top: '2px',
              margin: 'auto',
              left: '-35px',
            },
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: 'rgba(255,255,255,0.5)',
          height: '8px',
        },
        rail: {
          backgroundColor: 'rgba(255,255,255,0.3)',
        },
        track: {
          background: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)',
        },
        thumb: {
          width: '26px',
          height: '26px',
          backgroundColor: '#000',
          border: '6px solid #FFD05D',
        },
        mark: {
          backgroundColor: 'transparent',
        },
        markLabel: {
          color: 'rgba(255,255,255,0.5)',
          top: '45px!important',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: '3px solid rgba(255, 255, 255, 0.5)',
          borderRadius: '6px',
          fontSize: '14px',
          color: '#fff',
          letterSpacing: '0.25px',
          '&::placeholder': {
            color: 'rgba(255,255,255,0.3)',
            fontSize: '14px',
          },
          '&.Mui-focused': {
            borderColor: '#FF9B33',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&.customBtn': {
            backgroundColor: '#fff',
            color: '#121212',
            fontWeight: 700,
            fontSize: '14px',
            padding: '13px 16px',
            borderRadius: 4,
            lineHeight: 1,
            border: '1px solid #fff',
            '&:hover': {
              backgroundColor: '#121212',
              color: '#fff',
            },
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: '8px 10px',
          justifyContent: 'center',
          '&.followBtn': {
            borderRadius: '20px',
            minWidth: '60px',
            fontSize: '12px',
            fontWeight: '600',
            padding: '4.5px 10px',
            border: '1px solid #fff',
            backgroundColor: '#121212',
            color: '#fff',
            flexGrow: 0,
            '&:hover': {
              color: '#121212',
              backgroundColor: '#fff',
            },
            '&.Mui-selected': {
              color: '#121212',
              backgroundColor: '#fff',
              '&:hover': {
                backgroundColor: '#121212',
                color: '#fff',
              },
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 'auto',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#929292',
          textTransform: 'none',
          fontSize: '1rem',
          borderBottom: '2px solid #1F1F1F',
          height: '33px',
          minHeight: 'auto',
          padding: '0 16px 13px',
          '&.Mui-selected': {
            color: '#fff',
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          width: '100%',
          marginTop: 0,
          '&.tagsItem': {
            padding: '0 0 36px 0',
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          '&.blockIcon': {
            display: 'block',
            height: '20px',
          },
        },
      },
    },
    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          minWidth: '55px',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          border: '1px solid #F8F8F8',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#121212',
      dark: '#181818',
      light: '#1B1B1B',
      contrastText: '#fff',
    },
  },
});

export default theme;
