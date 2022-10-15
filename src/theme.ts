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
