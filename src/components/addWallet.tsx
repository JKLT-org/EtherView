import React, { useState, useEffect } from 'react'
import axios from 'axios';

type Props = {
    wallets: Array<string>,
    setWallets: Function,
}

const AddWallet = (props: Props) => {

    const [walletQuery, setWalletQuery] = useState('');

    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setWalletQuery(e.target.value);
        console.log(walletQuery);
    }

    axios.defaults.withCredentials = true;

    const addWallet = async (): Promise<void> => {
        const response = await axios({
                    url: 'http://localhost:3000/fe/addWallet',
                    method: "POST",
                    data: {
                        wallet_address: walletQuery
                    }
                })
            console.log(response.data)
            props.setWallets(response.data.walletAddresses)
    }

    useEffect(()=>{
    },[props.wallets])
    
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center border-e bg-white">
        <div className="sm:flex sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Add Wallet
            </h1>
        </div>
        </div>
    <form onSubmit={(e) => {e.preventDefault(); addWallet();}}>
        <label
        htmlFor="Wallet Address"
        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
        <input
            type="text"
            id="WalletAddress"
            className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="WalletAddress"
            onChange={(e)=>{handleInput(e)}}
        />

        <span
            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
        >
            Wallet address
        </span>
        </label>
        <button
        className="inline-block rounded border border-current px-8 py-3 pl-599 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
        type='submit'
        >
        Submit
        </button>
    </form>
    </div>
  )
}

export default AddWallet