import React from 'react'
import {useState} from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import AddWallet from '../components/addWallet'
import Views from '../components/views'
type Props = {}


function Dashboard({}: Props) {
    const [isSelected, setIsSelected] = useState(false)

  return (
    <div>
    <Header/>
    <Sidebar/>
    {isSelected ? <Views/> :<AddWallet/> }
    </div>
  )
}

export default Dashboard;