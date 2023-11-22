import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
type Props = {}


function Dashboard({}: Props) {
  return (
    <div>
    <Header/>
    <Sidebar/>
    </div>
  )
}

export default Dashboard