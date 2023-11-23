import React from 'react'
import pfp from '../img/pfp.png'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>Header

    <img alt='profile' src={pfp} />
    </div>
  )
}

export default Header