import React, {useState, useEffect} from 'react';
import web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';

const WalletConnection = () => {
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);

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
        } else {
            console.error('MetaMask not detected');
        }
        };
    
        init();
    }, []);
    
    return (
        <div>
        
        </div>
    )
}

export default WalletConnection
