import React from 'react';

const Circulation = ({ subsidy }) => {

    const totalSupply = 210240000;
    const FTI = 4204800;
    const GEM = 42108530;
    // const FDF = 4204800;
    const USI = 12159120;
    // const PWS = 147562750;
    const SRW = 7426492; // staking reward
    const subsidyRatio = (subsidy / totalSupply * 100).toFixed(2) + '%';
    const totalCirculation = GEM + FTI + SRW + subsidy;
    const ratio = (totalCirculation / totalSupply * 100).toFixed(2) + '%';


    return (
    <div>
        <p>
            In the majority game of Umayyad 1.0, a total of {USI} Meer of staking incentives were set, but only {SRW} Meer of the allocated staking rewards actually circulated to the market. The remaining unallocated portion will be used as a network Eco-development Fund. The Eco-development Fund will only be allocated and circulated to the market when the corresponding eco-building is carried out.
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