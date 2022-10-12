import React from 'react';
import { useState } from "react";
import Navbar from '../Navbar/Navbar';
import ExploreCoin from './ExploreCoin';
import SecondNav from './SecondNav';

const Explore = () => {
    const [hover, setHover] = useState(0);
    return (
        <div>
            <Navbar hover={hover} setHover={setHover}></Navbar>
            <SecondNav hover={hover}></SecondNav>
            <ExploreCoin></ExploreCoin>
        </div>
    );
};

export default Explore;