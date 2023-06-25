import React from 'react';
import BN from "bn.js";
import {useEffect, useState} from "react";
import Web3 from 'web3';


const Circulation = ({ subsidy }) => {
    // const [EDFBalance, setEDFBalance] = useState(0);
    const [EDFLiquid, setEDFLiquid] = useState(0);

    const totalSupply = 210240000;
    // Founding Team Incentives
    const FTI = 4204800;
    // Genesis Mapping
    const GEM = 42108530;
    // const FDF = 4204800;
    // 'Umayyad 1.0 Staking Incentives'
    const USI = 12159120;
    // const PWS = 147562750;
    const SRW = 7426492; // staking reward
    // Eco-development Fund
    const EDF = 4732628;

    useEffect(() => {
            // fetch('https://qng.rpc.qitmeer.io', {
            //     method: 'POST',
            //     body: JSON.stringify({
            //         "jsonrpc": "2.0",
            //         "id": 1,
            //         "method": "eth_getBalance",
            //         "params": ["0xb191d00579ba344565637468e0ccbd6f161c0333", "latest"]
            //     }),
            //     headers: {
            //         'Content-Type': 'application/json',
            //         // 'Authorization': 'Basic ' + btoa('qitmeer:qitmeer123')
            //     }
            // })
            //     .then(response => response.json())
            //     .then(data => {
            //         console.log(data);
            //         const bigEDFBalanceHex = new BN(data.result);
            //         const bigEDFBalance = web3.utils.toBN(bigEDFBalanceHex);
            //         console.log("bigEDFBalance:",bigEDFBalanceHex)
            //         const decimalEDFBalance = bigEDFBalance.toNumber() / 1e18;
            //         const decimalEDFLiquid = EDF - decimalEDFBalance;
            //         setEDFLiquid(decimalEDFLiquid);
            //     })
            //     .catch(error => console.error(error))
        const web3 = new Web3('https://qng.rpc.qitmeer.io');
        web3.eth.getBalance("0xb191d00579ba344565637468e0ccbd6f161c0333")
            .then(balance => {
                // const EDFtoWei = web3.utils.toWei(EDF,'ether')
                const decimalEDFBalance = web3.utils.fromWei(balance, 'ether');
                console.log('地址余额:', decimalEDFBalance);
                const bigEDFLiquid = EDF - parseFloat(decimalEDFBalance);
                console.log("生态基金流通:",bigEDFLiquid)
                setEDFLiquid(bigEDFLiquid);
            })
            .catch(error => {
                console.error('获取余额时出错:', error);
            });
    }, []);

    const subsidyRatio = (subsidy / totalSupply * 100).toFixed(2) + '%';
    const totalCirculation = GEM + FTI + SRW + subsidy + EDFLiquid;
    const ratio = (totalCirculation / totalSupply * 100).toFixed(2) + '%';


    return (
    <div>
        <p>
            In the majority game of Umayyad 1.0, a total of {USI} Meer of staking incentives were set, but only {SRW} Meer of the allocated staking rewards actually circulated to the market. The remaining unallocated portion will be used as a network Eco-development Fund. The Eco-development Fund will only be allocated and circulated to the market when the corresponding eco-building is carried out. Current circulating supply of the Eco-development Fund is {EDFLiquid}.
        </p>
        <p>
            Therefore, the main components of current circulation is: Genesis Mapping {GEM} Meer(20%), Founding Team Incentives {FTI} Meer(2%), Umayyad 1.0 Staking Reward {SRW} Meer(3.53%), Current PoW Total Subsidy {subsidy} Meer({subsidyRatio}). In addition to this, the Eco-development Fund and the Future Development Fund will be gradually and irregularly released into the circulation market according to their use.
        </p>
        <p>
            So, the Current Total Circulation is <span className={"totalCirculation"}><b>{totalCirculation}({ratio})</b></span> Meer.
        </p>
    </div>
    );
};

export default Circulation;