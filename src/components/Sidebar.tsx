import React, {Dispatch, SetStateAction, useEffect, useState} from 'react'
import walletIcon from '../img/wallet.png'
import trash from '../img/delete.png'
import add from '../img/add.png'
import AddWallet from '../components/addWallet'
import Views from '../components/views'
import axios from 'axios'

type Props = {
    wallets: Array<string>,
    usernameApp: string,
    setWallets: Function,
}

const Sidebar = (props: Props) => {
    const [isSelected, setIsSelected] = useState(false)
    const [selectedWallet, setSelectedWallet] = useState('')

    const walletSelected = (wallet:string) => {
        setSelectedWallet(wallet)
        setIsSelected(true)
    }
    const deleteWallet = async () =>{
        const response = await axios ({
            url: '/fe/deleteWallet',
            method: 'POST',
            data:{
                wallet_address: selectedWallet
            }
        })
        console.log(response.data);
        props.setWallets(response.data.walletAddresses)
    }  

    useEffect(()=>{
    },[isSelected,selectedWallet, props.wallets])

  return (
    <div className='flex'>
    <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
  <div>
    <div className="inline-flex h-16 w-16 items-center justify-center">
      <span
        className="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
      >
        {props.usernameApp[0]}
      </span>
    </div>

    <div className="border-t border-gray-100">
      <div className="px-2">
        <div className="py-4">
          <button
            className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
            onClick={()=> setIsSelected(false)}
          >
            <img src={add} alt='addWallet'/>

            <span
              className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
            >
              Add Wallet
            </span>
          </button>
        </div>

        <ul className="space-y-1 border-t border-gray-100 pt-4">
            {props.wallets.map((wallet, index) => (
                <li key={index} >
                    <button
              className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              onClick={()=>walletSelected(wallet)}  
            >
                <img src={walletIcon} alt='wallet'/>
              <span
                className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
              >
                {wallet}
              </span>
            </button>
                </li>
            ))}
        </ul>
      </div>
    </div>
  </div>

  <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
      <button
        type="submit"
        className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        onClick={()=> deleteWallet()}
        >
        <img src={trash} alt='delete'/>
        <span
          className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
        >
          Delete wallet
        </span>
      </button>
    </div>    
    </div>
    {isSelected ? <Views selectedWallet={selectedWallet}/> :<AddWallet wallets={props.wallets} setWallets={props.setWallets}/> }
    </div>
  )
}

export default Sidebar