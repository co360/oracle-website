import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00F9BB'
    },
    secondary: {
      main: '#8DA9C4'
    }
  },
  typography: {
    fontFamily: 'Inter',
    body1: {
      fontSize: 10
    },
    body2: {
      fontSize: 22
    },
    h1: {
      fontSize: 56
    },
    h2: {
      fontSize: 40
    },
    h3: {
      fontSize: 32
    }
  }
})
