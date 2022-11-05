import { createTheme } from '@mui/material'

export const theme = createTheme({
    palette: {
        background: {
            default: '#f8f8f8'
        },
        primary: {
            main: '#1C6E7E',
            light: '#2592A7',
            dark: '#165662',
            contrastText: '#fff'
        },
        action: {
            selected: '#fff',
            selectedOpacity: 0.3
        }
    },
    shape: {
        borderRadius: 10
    },
    typography: {
        fontFamily: '"Quicksand", sans-serif',
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500
    },
    components: {
        MuiButtonBase: {
            styleOverrides: {
                root({ theme }) {
                    // textTransform: "none !important",
                    // borderColor: "primary.main !important",
                    return {
                        textTransform: 'none !important'
                    }
                }
            }
        }
        // "MuiButton-outlined": {
        //   styleOverrides:{
        //     root({theme}){
        //       return {
        //         border:`2px solid ${theme.palette.primary.main} !important`
        //       }
        //     }
        //   }
        // },
    }
})
