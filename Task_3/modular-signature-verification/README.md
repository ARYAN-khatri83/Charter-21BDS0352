# Task 3: Modular Signature Scheme Verification Algorithm
### Overview
This project implements a modular signature verification algorithm that supports multiple signature schemes, such as ECDSA, Schnorr, and RSA. The goal of this algorithm is to verify if a given signature matches the signer’s address, supporting flexibility with different signature formats by accepting "bytes" as the signature data format.

The solution is designed to be adaptable to different types of signature schemes, making it efficient in terms of time complexity and suitable for real-world blockchain applications.

## Key Objectives
Universal Signature Scheme Compatibility: Recognize and process different types of signature schemes (e.g., ECDSA, Schnorr, RSA).
Optimized Time Complexity: Minimize gas usage (in blockchain applications) by reducing unnecessary computations and employing modular design.
Test Coverage: Include a variety of tests to verify functionality across different signature schemes.

### Setup Instructions

Requirements
1. Python (version 3.8 or above)
2. pip (for installing dependencies)

### Verify installation with:
```
python --version
pip --version
```

## Installation Steps
### Clone the Repository:
```
git clone https://github.com/your-username/Charter21BDS0352.git
cd Charter21BDS0352/Task_3
```
### Set up a Virtual Environment (optional but recommended):
```
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```
### Install Dependencies:
```
pip install -r requirements.txt
```
### Usage Instructions
## Running the Verification Algorithm
1. The main verification script is signature_verifier.py which includes the core verification logic. To use this script:
Prepare the Input:
Signer Address: The address that signed the message.
Signature Data: The raw byte data of the signature.
Signed Hash: The hash of the original data.
Scheme Type: The type of signature scheme (e.g., "ecdsa", "schnorr", "rsa").

2. Run the Verification Script: To verify a signature, use the following command:
```
python src/signature_verifier.py
```

Example Input and Output
Sample Python Usage
Here’s an example of how to call the signature_verifier function within the Python environment:
```
from src.signature_verifier import signature_verifier

# Example data
signer_address = "0x123456789abcdef"
signature_data = b'\x01' * 65  # Example placeholder for signature data
signed_hash = b'\x01' * 32  # Example placeholder for signed hash
scheme_type = "ecdsa"  # Can be "ecdsa", "schnorr", or "rsa"

# Verify signature
is_valid = signature_verifier(signer_address, signature_data, signed_hash, scheme_type)
print(f"Verification Result: {is_valid}")
```

Expected Output
```
[DEBUG] Split signature components for scheme 'ecdsa': (1, 123456789abcdef, 123456789abcdef)
[DEBUG] ECDSA verification result: True
Verification Result: True
```

## Testing
The test cases cover different scenarios and signature schemes to ensure the algorithm’s robustness.

Run Tests
To execute the test suite, use:
```
pytest tests/
```


Test Cases Include:
1. Valid Signatures: Tests with correctly signed data.
2. Invalid Signatures: Tests with altered data or signatures.
3. Unsupported Schemes: Handling for unsupported schemes.

### Sample Test Output
==================================================== test session starts ====================================================
platform darwin -- Python 3.9.7, pytest-7.1.1, pluggy-1.0.0
collected 3 items                                                                                                            

tests/test_signature_verifier.py ...                                                                                   [100%]

===================================================== 3 passed in 0.10s ======================================================

## Project Structure
```
Task_3/
├── src/
│   ├── schemes/
│   │   ├── ecdsa_verifier.py
│   │   ├── rsa_verifier.py
│   │   ├── schnorr_verifier.py
│   ├── signature_verifier.py      # Main verification script
│   └── utils.py                   # Utility functions for handling signatures
├── tests/
│   ├── test_signature_verifier.py # Test cases for signature verification
├── requirements.txt               # Python dependencies
└── README.md                      # Documentation
```

Example Scenarios
ECDSA Signature Verification:

Input: Signer Address, ECDSA signature data, and signed hash.
Output: True if valid, False otherwise.
RSA Signature Verification:

Input: Signer Address, RSA signature data, and signed hash.
Output: True if valid, False otherwise.
Unsupported Signature Scheme:

Input: Signer Address, unsupported signature type.
Output: Error message indicating unsupported sche


