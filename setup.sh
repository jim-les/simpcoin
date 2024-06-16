#!/bin/bash

# Download and execute the installation script
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"

echo "Installation completed."

#!/bin/bash

# Download and execute the installation script
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"

# Initialize the local replica of the Internet Computer
npm install


dfx init

echo "Local replica initialized."

dfx start --background

echo "Local replica started."

# Deploy your project to the mainnet or a testnet
# Replace 'your_project' with the name of your project
dfx deploy --all

echo "Project deployed successfully."
