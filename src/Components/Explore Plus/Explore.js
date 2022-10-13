import React from 'react';
import { useState } from "react";
import Navbar from '../Navbar/Navbar';
import ExploreCoin from './ExploreCoin';
import SecondNav from './SecondNav';
import Text from './Text';

const Explore = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <SecondNav></SecondNav>
            <ExploreCoin></ExploreCoin>
            <Text></Text>
        </div>
    );
};

export default Explore;