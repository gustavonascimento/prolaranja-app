import { colors } from '@material-ui/core'

const white = '#FFFFFF'
const black = '#000000'
const orange = '#F58233'
const lightOrange = '#FFD6B9'
const green = '#587639'

export default {

  black,
  white,
  orange,
  lightOrange,
  green,

  headers: {
    subtitle: '#5A3928'
  },

  borders: {
    main: '#655AA1'
  },
  gradient:{
    light: {
      start: '#645B97',
      end: '#403877'
    },
    main: `linear-gradient(#120F23, #292447)`
  },
  primary: {
    contrastText: white,
    main: orange,
    light: lightOrange,
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue['A400'],
    light: colors.blue['A400']
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: '#4D5151',
    secondary: '#643A9F',
    link: '#33354E'
  },
  title: {
    primary: '#643A9F'
  },
  background: {
    default: '#F8F7FA',
    paper: white
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
}