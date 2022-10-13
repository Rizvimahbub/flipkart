import React from 'react';
import Footer from '../Footer/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Explore;