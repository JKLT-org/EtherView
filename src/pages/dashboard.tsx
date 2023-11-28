import React from 'react'
import {useState} from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import AddWallet from '../components/addWallet'
import Views from '../components/views'
type Props = {};


function Dashboard({}: Props) {
    const [isSelected, setIsSelected] = useState(false)
    const [wallets, setWallets] = useState(["1", "2", "3", "4"])

  return (
    <div>
    <Header username="test"/>
    <div className='flex'>
    <Sidebar wallets={wallets} username='test' isSelected={isSelected} setIsSelected={setIsSelected}/>
    {isSelected ? <Views/> :<AddWallet/> }
    </div>
    </div>
  )
}

export default Dashboard