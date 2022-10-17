import { createTheme } from '@mui/material/styles';
import UbuntuRegularTtf from './assets/fonts/Ubuntu-Regular.ttf';

const theme = createTheme({
    typography:{
      fontFamily:'UbuntuRegular,Arial'
    },
    breakpoints:{
      values:{
        xs:0,
        sm:600,
        md:900,
        lg:1440,
        xl:1536
      }
    },
    components:{
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
        MuiSlider:{
          styleOverrides:{
              root:{
                color:'rgba(255,255,255,0.5)',
                height:'8px'
              },
              rail:{
                backgroundColor:'rgba(255,255,255,0.3)'
              },
              track:{
                background:'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)'
              },
              thumb:{
                backgroundColor:'#000',
                border: '6px solid #FFD05D'
              },
              mark:{
                backgroundColor:'transparent'
              },
              markLabel:{
                color:'rgba(255,255,255,0.5)'
              },
              markActive:{
                color:'#fff'
              }
          },
        },
        MuiOutlinedInput:{
          styleOverrides:{
            root:{
              border:'3px solid rgba(255, 255, 255, 0.5)',
              borderRadius:'6px',
              fontSize:'14px',
              color:'#fff',
              letterSpacing:'0.25px',
              '&::placeholder':{
                color:'rgba(255,255,255,0.3)',
                fontSize:'14px'
              },
              '&.Mui-focused':{
                borderColor:'#FF9B33'
              }
            }
          }
        },
        MuiButton:{
          styleOverrides:{
            root:{
              '&.customBtn':{
                backgroundColor:'#fff',
                color:'#121212',
                fontWeight:700,
                fontSize:'14px',
                padding:'13px 16px',
                borderRadius:4,
                lineHeight:1,
                '&:hover':{
                  backgroundColor:'#121212',
                  color:'#fff',
                  border:'1px solid #fff'
                }
              }
            }
          }
        },
        MuiTab:{
          styleOverrides:{
            root:{
              color:'#929292',
              textTransform:'none',
              fontSize:'1rem',
              '&.Mui-selected': {
                'color': '#fff',
                'borderBottom': '4px solid #fff'
              }
            },

          }
        },
        MuiGrid:{
          styleOverrides:{
            root:{
              width:'100%',
              marginTop:0
            }
          }
        }
    },
    palette:{
        primary:{
            main:'#121212',
            dark:'#181818',
            light:'#1B1B1B',
            contrastText:'#fff'
        },
    }
});

export default theme
