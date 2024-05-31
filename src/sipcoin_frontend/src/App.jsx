import React, {useState, useEffect} from 'react';
import web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import { sipcoin_backend } from 'declarations/sipcoin_backend';
import sipcoin from './assets/sipcoin.jpeg';
import discordIcon from './assets/section10/discord.webp';
import telegramIcon from './assets/section10/telegram.webp';
import twitterIcon from './assets/section10/twitter.webp';
import redditIcon from './assets/section10/reddit.webp';
import shieldIcon from './assets/section8/shield.webp';
import PhoneBuy from './assets/section4/wallet-buy.webp';
import Phoneswap from './assets/section4/wallet-swap.webp';
import Phonestake from './assets/section4/wallet-stake.webp';
import Phonestore from './assets/section4/wallet-buy.webp';
import Phonetransfer from './assets/section4/wallet-transfer.webp';
import { Button, Snackbar, Alert, AppBar, Tabs, Tab, Box, Typography  } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// pages
import Tobar from "./components/Tobar";
export default function App() {
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        const init = async () => {
        const provider = await detectEthereumProvider();
        if (provider) {
            const web3Instance = new Web3(provider);
            setWeb3(web3Instance);

            // Check if user is already connected
            const accounts = await web3Instance.eth.getAccounts();
            if (accounts.length > 0) {
            setAccount(accounts[0]);
            }

            // Handle account changes
            provider.on('accountsChanged', (accounts) => {
            if (accounts.length > 0) {
                setAccount(accounts[0]);
            } else {
                setAccount(null);
            }
            });

            // Handle chain (network) changes
            provider.on('chainChanged', () => {
            window.location.reload();
            });

        } else {
            handleError('MetaMask not detected. Please install MetaMask to use this application.');
        }
        };

        init();
    }, []);

    const connectWallet = async () => {
        if (web3) {
        try {
            const accounts = await web3.eth.requestAccounts();
            setAccount(accounts[0]);
            setError(null); // Clear any previous errors
        } catch (error) {
            handleError('Error connecting to MetaMask: ' + error.message);
        }
        }
    };

    const handleError = (message) => {
        setError(message);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
    };


    return (
        <div className='app_cointainer'>
            <Tobar connectWallet={connectWallet} account={account}/>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {error}
                </Alert>
            </Snackbar>

            {/* div carousel section */}
            <div className="carousel_section container d-flex align-items-center w-100 " style={{height: "65vh"}}>
                <div className="row w-100">
                    <div className="col-12 col-lg-6 col-md-6 my-5 d-flex align-items-center">
                        <div>
                            <h1 style={{fontSize: "6.5em"}}>SIP COIN</h1>
                            <h3>One step access to decentrolised finance</h3>
                            <div className="d-flex gap-3 my-5">
                                <Button variant="contained" color="primary" className="py-3 text-light">Claim Airdrop<KeyboardArrowRightIcon /> </Button>
                                <Button variant="outlined" color="primary" className="py-3 text-light">Download on <br /> AppleStore</Button>
                                <Button variant="outlined" color="primary" className="py-3 text-light">Download on <br />Playstore</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 ">
                        <div className="carousel_img">
                            <img src={sipcoin} width={"100%"} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* div market gap section */}
            <section className="market_gap container py-5 my-4">
                <div className="market_gap_widget">
                    <div className="row">
                        <div className="col-3 text-center py-5">
                            <h1>0.00</h1>
                            <h6>Market Gap</h6>
                        </div>

                        <div className="col-3 text-center py-5">
                            <h1>0.00</h1>
                            <h6>Total Volume</h6>
                        </div>

                        <div className="col-3 text-center py-5">
                            <h1>0.00</h1>
                            <h6>Total wallets</h6>
                        </div>

                        <div className="col-3 text-center py-5">
                            <h1>0.00</h1>
                            <h6>Total Trades Gap</h6>
                        </div>
                    </div>
                </div>
            </section>


            {/* swap with plug wallet */}
            <section className="swap my-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 order-sm-1 col-md-6 col-lg-6" style={{height: "600px"}}>
                        <TabPanel value={value} index={0}>
                            <img src={PhoneBuy} alt="" style={{width: "100%"}}/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <img src={Phonetransfer} alt="" style={{width: "100%"}}/>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <img src={Phonestore} alt="" style={{width: "100%"}}/>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <img src={Phoneswap} alt="" style={{width: "100%"}}/>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <img src={Phonetransfer} alt="" style={{width: "100%"}}/>
                        </TabPanel>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 order-sm-2 d-flex align-items-center">
                            <Box>
                            <h1 className="" style={{fontSize: "3em"}}>Plug Wallet</h1>
                                <AppBar position="static" sx={{ background: 'none', boxShadow: 'none' }}>
                                <Tabs 
                                    value={value} 
                                    onChange={handleChange} 
                                    aria-label="simple tabs example"
                                    sx={{
                                        '.MuiTab-root': {
                                        color: 'gray',
                                        '&.Mui-selected': {
                                            color: 'white',
                                        },
                                        },
                                        '.MuiTabs-indicator': {
                                        backgroundColor: 'darkblue',
                                        },
                                    }}
                                    >
                                        <Tab label="Buy" {...a11yProps(0)} />
                                        <Tab label="Transfer" {...a11yProps(1)} />
                                        <Tab label="Store" {...a11yProps(1)} />
                                        <Tab label="Swap" {...a11yProps(1)} />
                                        <Tab label="Stake" {...a11yProps(1)} />
                                    </Tabs>
                                </AppBar>

                                <p className='py-4'>Buy crypto with your bank card using our partner fiat gateway providers.</p>
                                <Button variant="outlined" color="primary" className="py-3 text-light" style={{border: "1px solid white"}}>Learn More <KeyboardArrowRightIcon /> </Button>
                                
                            </Box>

                        </div>
                    </div>
                </div>
            </section>


            {/* section optimize trade */}
            <section className="security my-5 py-5">
                <div className="container px-5">
                    <h1 className="text-center" style={{fontSize: "3em"}}>Your decentralized finance shield</h1>
                    <div className="d-flex justify-content-center">
                        <img src={shieldIcon} alt="" style={{width: "70%"}}/>
                    </div>
                </div>
            </section>


            {/* join us */}
            <section className="join py-5 my-5">
                <div className="container">
                    <h1 className="text-center" style={{fontSize: "3em"}}>Join Us</h1>
                    <div className="d-flex justify-content-center">
                        <img src={discordIcon} alt="" style={{transform: "scale(0.5)"}}/>
                        <img src={telegramIcon} alt="" style={{transform: "scale(0.5)"}} />
                        <img src={twitterIcon} alt="" style={{transform: "scale(0.5)"}} />
                        <img src={redditIcon} alt="" style={{transform: "scale(0.5)"}}/>
                    </div>
                </div>
            </section>


            {/* footer section */}
            <hr /> 
            <footer className="py-5">
                <div className="container">
                    <div className="row py-4">
                        <div className="col-3">
                            <h5>Protocal</h5>
                        </div>

                        <div className="col-3">
                            <h5>Governence</h5>
                        </div>
                       
                        <div className="col-3">
                            <h5>Privacy Policy</h5>
                        </div>
                        <div className="col-3">
                            <h5>Subscribe to sipcoin newsletter</h5>
                            <p style={{color: "gray"}}>Get the latest news and updates</p>
                            <a href="" className="btn py-3" style={{border: "1px solid white", color: "white", width: "80%"}}>Subscribe</a>
                        </div>
                    </div>
                    <hr />
                    <div className="row text-center py-4">
                        <div className="col-4">
                            <p>© 2024 sipcoin, All Rights Reserved.</p>
                        </div>

                        <div className="col-4">
                            <p>sipcoin</p>
                        </div>

                        <div className="col-4">
                            <p>BUILD @ICP 2024</p>
                        </div>
                    </div>
                </div>
            </footer>
            
        </div>
    )
}




const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
            <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
            </Box>
            )}
        </div>
    );
};

const a11yProps = (index) => {
    return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
    };
};
  