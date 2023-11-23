import React from 'react'
import wallet from '../img/wallet.png'
import trash from '../img/delete.png'
import add from '../img/add.png'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div>
        Sidebar
        <img alt='addWallet' src={add} />
        <img alt='wallet' src={wallet} />
        <img alt='trash' src={trash} />
        </div>
  )
}

export default Sidebar