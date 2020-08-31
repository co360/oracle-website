import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 180,
    width: 220,
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: colors.white.main,
    borderRadius: '10px 10px 0px 0px'
  },
  trendUp: {
    width: 44,
    height: 44,
    marginRight: -5,
    marginTop: -25,
    transform: 'rotate(-180deg)',
    color: colors.green.main
  },
  trendDown: {
    width: 44,
    height: 44,
    marginTop: -30,
    marginRight: -5,
    color: colors.red.main
  },
  title: {
    fontWeight: 'bold',
    color: colors.blue.accent,
    paddingBottom: 30
  },
  text: {
    color: colors.black.background,
    paddingBottom: 10
  },
  marker: {
    height: 10,
    width: 220,
    marginTop: -10,
    backgroundColor: theme.palette.primary.main
  },
  markerDown: {
    height: 10,
    width: 220,
    marginTop: -10,
    backgroundColor: colors.red.main
  }
}))

export default useStyles
