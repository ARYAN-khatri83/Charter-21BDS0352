# charter-21BDS0352

## Project Overview
This repository contains solutions for the Charter Stage One tasks. The project demonstrates proficiency in [Frontend, Backend, Scripting, or any specific field based on task selection]. Each solution is designed to meet the requirements of Stage One and can be independently set up and executed.

## Setup Instructions
### Requirements
Node.js (version 14 or above)
npm (version 6 or above)
Git (for cloning the repository)
Python (if required for backend)
Ensure these are installed on your system before proceeding. Verify installations with:
```
node -v
npm -v
git --version
python --version
```

## Installation Steps
### Install dependencies for backend
```
pip install -r requirements.txt
```

### Install node modules for frontend
```
npm install
```

### Setup API Key (if required)
Create a .env file in the root folder.
Add the following line and save the file.
API_KEY=your-api-key-here

### Running the Project
To start the backend server:
```
python app.py
```

### To run the frontend:
```
npm start
```

### Usage Instructions
Running the Solution
Each task can be run independently after setup.

## Example command for running the Merkle Proof verification:
node verifyMerkleProof.js

### Inputs/Outputs
Input Format: Each task may require specific inputs. For example, for a Merkle Proof verification, input might be a JSON array of proof elements and a leaf hash.
Output Format: Outputs are displayed directly in the console.

Example output:
Verification Result: true
Interacting with MetaMask or Wallets (if applicable)
Ensure MetaMask is installed and connected to the appropriate network.
Grant permissions for the site to interact with MetaMask when prompted.

##Example
Below is a sample run with expected inputs and outputs.
Sample Run
For Merkle Proof verification:

Input:
```
json
{
   "proof": ["0xabc123...", "0xdef456..."],
   "leaf": "0x789abc..."
}
```

Run Command:
node verifyMerkleProof.js

Expected Output:
Verification Result: true
Test Cases

Run test cases with:
npm test
Test cases include:

Valid proofs
Invalid proofs
Edge cases like empty proof arrays or malformed inputs
