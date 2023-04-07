import React, { useState, useEffect } from 'react';
import BN from 'bn.js';
import Circulation from "../Circulation";

const CurrentSubsidy = () => {
    const [subsidy, setSubsidy] = useState(0);


    useEffect(() => {

        const interval = setInterval(() => {
            fetch('https://qng.rpc.qitmeer.io', {
                method: 'POST',
                body: JSON.stringify({
                    "jsonrpc": "2.0",
                    "id": null,
                    "method": "qng_getSubsidy",
                    "params": []
                }),
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Basic ' + btoa('qitmeer:qitmeer123')
                }
            })
                .then(response => response.json())
                .then(data => {
                    // console.log(data);
                    const bigNumber = new BN(data.result.totalsubsidy);
                    const decimalNumber = bigNumber.toNumber() / 1e8;
                    setSubsidy(decimalNumber);
                })
                .catch(error => console.error(error))

        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='subsidy'>
            <div className='c-subsidy'>
                <b>Current PoW Total Subsidy: {subsidy} Meer</b>
            </div>
            <div className={'circulation'}>
                <Circulation subsidy={subsidy} />
            </div>

        </div>
    );
};

export default CurrentSubsidy;