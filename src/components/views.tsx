import React, { useEffect, useState, useCallback, CSSProperties } from 'react';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';

type Props = {
    selectedWallet: string;
};

const Views = (props: Props) => {
    const [walletData, setWalletData] = useState([
        { timestamp: 'January 1, 2023, 00:00:00 UTC', eth_balance: '2.5', usd_balance: '5000' },
        { timestamp: 'January 2, 2023, 00:00:00 UTC', eth_balance: '2.6', usd_balance: '5200' },
        { timestamp: 'January 3, 2023, 00:00:00 UTC', eth_balance: '2.7', usd_balance: '5400' },
        { timestamp: 'January 4, 2023, 00:00:00 UTC', eth_balance: '2.8', usd_balance: '5300' },
        { timestamp: 'January 5, 2023, 00:00:00 UTC', eth_balance: '2.5', usd_balance: '5800' },
        { timestamp: 'January 6, 2023, 00:00:00 UTC', eth_balance: '3.9', usd_balance: '6000' },
        { timestamp: 'January 7, 2023, 00:00:00 UTC', eth_balance: '3.1', usd_balance: '5000' },
        { timestamp: 'January 8, 2023, 00:00:00 UTC', eth_balance: '3.2', usd_balance: '5500' },
        { timestamp: 'January 9, 2023, 00:00:00 UTC', eth_balance: '3.3', usd_balance: '6500' },
        { timestamp: 'January 10, 2023, 00:00:00 UTC', eth_balance: '2.5', usd_balance: '6800' }]);

    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

    // const getWalletData = useCallback(async (): Promise<void> => {
    //     const response = await axios({
    //         url: '/fe/getWalletData',
    //         method: "POST",
    //         data: {
    //             wallet_address: props.selectedWallet
    //         }
    //     });
    //     setWalletData(response.data);
    // }, [props.selectedWallet]);

    // useEffect(() => {
    //     getWalletData();
    // }, [getWalletData]);

    const titleStyle: CSSProperties = {
        textAlign: 'center', 
        marginBottom: '20px', 
        color: 'blue', 
    };

    const graphContainerStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',     
        height: '500px',          
        width: '80%',            
        maxWidth: '1000px',       
        margin: 'auto',          
        padding: '20px',
    };

    const chartData = {
        labels: walletData.map(item => new Date(item.timestamp).toLocaleDateString()),
        datasets: [
            {
                label: 'Ethereum Balance',
                data: walletData.map(item => parseFloat(item.eth_balance)),
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.2)',
                yAxisID: 'y-axis-eth',
            },
            {
                label: 'USD Balance',
                data: walletData.map(item => parseFloat(item.usd_balance)),
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.2)',
                yAxisID: 'y-axis-usd',
            }
        ]
    };

    const options: ChartOptions<'line'> = {
        scales: {
            'y-axis-eth': {
                type: 'linear' as const, 
                display: true,
                position: 'left',
                title: {
                    display: true,
                    text: 'Ethereum Balance'
                }
            },
            'y-axis-usd': {
                type: 'linear' as const,
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
                title: {
                    display: true,
                    text: 'USD Balance'
                }
            },
        },
    };
    
    

    return (
        <>
            <h1 style={titleStyle}>Ethereum and USD Balance Over Time</h1>
            <div style={graphContainerStyle}>
                <Line data={chartData} options={options} />
            </div>
        </>
    );
};


export default Views;
