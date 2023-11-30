import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'

type Props = {
    selectedWallet:string;
}

const Views = (props: Props) => {

    const [walletData, setWalletData] = useState([]);

    const getWalletData = useCallback (async (): Promise<void> => {
        const response = await axios({
            url: '/fe/getWalletData',
            method: "POST",
            data: {
                wallet_address: props.selectedWallet
            }
        })
        console.log(response.data);
        setWalletData(response.data);
    }, [props.selectedWallet]);

    useEffect(() => {
        getWalletData();
    }, [getWalletData])


  return (
    <div>views {props.selectedWallet}</div>
  )
}

export default Views