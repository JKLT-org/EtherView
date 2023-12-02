import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
type Props = {
  usernameApp:string,

};


function Dashboard(props: Props) {
    const [wallets, setWallets] = useState([])

    const getWallets = async (): Promise<void> => {
        const response = await axios({
            url: '/fe/getWallets',
            method: "GET"
        })
        console.log(response.data.walletAddresses);
        setWallets(response.data.walletAddresses);
        //if using localStorage to store user
       // setUsername(localStorage.getItem('username') || 'PleaseLogin')
    }

    useEffect(() => {
        getWallets();
    }, [])


  return (
    <div>
    <Header usernameApp={props.usernameApp}/>
    <div className='flex'>
    <Sidebar wallets={wallets} setWallets={setWallets} usernameApp={props.usernameApp}/>
    </div>
    </div>
  )
}

export default Dashboard;