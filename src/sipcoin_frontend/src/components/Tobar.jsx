import React from 'react';
import './Styles/Topbar.css';
import { Button } from '@mui/material';
import sipcoin from '../assets/sipcoin.jpeg';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";


const Tobar = ({connectWallet, account}) => {
    return (
        <div className='topbar'>
            <div className="container">
                <div className="py-5 d-flex justify-content-between">
                    <div className="web_title d-flex align-items-center gap-4">
                        <div className="web_logo">
                            <img src={sipcoin} alt="" />
                        </div>
                        <h1>Sipcoin</h1>
                    </div>

                    <div className="connect_wallet">
                    {account ? (
                        <div>
                        <p>Connected account: {account}</p>
                        </div>
                    ) : (
                        <Button onClick={connectWallet} variant="contained" color="primary" className='py-3' >Connect Wallet <KeyboardArrowRightIcon /> </Button>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tobar
