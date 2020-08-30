import { makeStyles } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 140,
    maxWidth: 1360,
    paddingBottom: 140,
  },
  logo: {
    height: 36
  },
  titleTop: {
    marginTop: 80
  },
  textWrapper: {
    marginTop: 20,
    marginBottom: 20,
    color: colors.white.main
  },
  cardsRow: {
    paddingTop: 80
  }
}))

export default useStyles
