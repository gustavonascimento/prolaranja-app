import { createMuiTheme } from '@material-ui/core'

import palette from './palette'
// import typography from './typography'
// import overrides from './overrides'

const theme = createMuiTheme({
  palette,
  // typography,
  // overrides,
  
  zIndex: {
    appBar: 1200,
    drawer: 1100
  },
  container: {
    max: 1080,
    main: 900
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default theme;