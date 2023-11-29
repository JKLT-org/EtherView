import React, { useEffect, useState } from 'react'
import axios from 'axios'

type Props = {
    selectedWallet:string;
}

const Views = (props: Props) => {

    // const [walletData, setWalletData] = useState({timestamp: '01-21-23', eth_balance: '3.84', usd_balance: '6492.43'});

    // const getWalletData = useCallback (async (): Promise<void> => {
    //     const response = await axios({
    //         url: '/getWalletData',
    //         method: "POST",
    //         data: {
    //             wallet_address: props.selectedWallet
    //         }
    //     })
    //     setWalletData(response.data);
    // }, [props.selectedWallet]);

    // useEffect(() => {
    //     getWalletData();
    // }, [getWalletData])


  return (
    <div>views {props.selectedWallet}</div>
  )
}

export default Views