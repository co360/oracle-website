import React from 'react'
import classNames from 'classnames'

import Logo from '../../static/svg/horizontal_green_white.svg'
import useStyles from './style'
export const SynthetifyIconHorizontal: React.FC<{ className?: string }> = ({ className }) => {
  const classes = useStyles()
  // TODO split into separate
  return (
    <img
      src={Logo}
      alt='Synthetify Logo'
      className={classNames(className, { [classes.iconRoot]: !className })}
    />
  )
}
export default SynthetifyIconHorizontal
