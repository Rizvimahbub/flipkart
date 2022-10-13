import React from 'react';
import { useState } from "react";
import Navbar from '../Navbar/Navbar';
import ExploreCoin from './ExploreCoin';
import SecondNav from './SecondNav';
import Text from './Text';

const Explore = () => {
    const [hover, setHover] = useState(0);
    return (
        <div>
            <Navbar></Navbar>
            <SecondNav hover={hover}></SecondNav>
            <ExploreCoin></ExploreCoin>
            <Text></Text>
        </div>
    );
};

export default Explore;