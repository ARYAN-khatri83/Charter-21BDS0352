import React, { useState } from 'react';
import { Web3Provider } from '@ethersproject/providers';
import { Contract } from 'ethers';
import contractABI from './contractABI.json'; // Ensure path is correct

const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';

function VerifyMerkleProof() {
  const [proof, setProof] = useState('');
  const [leaf, setLeaf] = useState('');
  const [result, setResult] = useState(null);

  async function verifyProof() {
    if (!window.ethereum) {
      alert('MetaMask is required!');
      return;
    }

    try {
      // Request account access if needed
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Initialize provider and contract
      const provider = new Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new Contract(contractAddress, contractABI, signer);

      // Attempt to verify the proof
      const isValid = await contract.verify(JSON.parse(proof), leaf);
      setResult(isValid);
    } catch (error) {
      console.error('Verification failed:', error);
      alert(`Verification failed: ${error.message}`);
      setResult(null);
    }
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Verify Merkle Proof</h2>
      <input
        type="text"
        placeholder="Enter Merkle proof as JSON array"
        value={proof}
        onChange={(e) => setProof(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Enter leaf hash"
        value={leaf}
        onChange={(e) => setLeaf(e.target.value)}
        style={styles.input}
      />
      <button onClick={verifyProof} style={styles.button}>Verify</button>
      {result !== null && (
        <p style={{ ...styles.result, color: result ? 'green' : 'red' }}>
          Verification Result: {result.toString()}
        </p>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9'
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '15px',
    fontSize: '18px',
  }
};

export default VerifyMerkleProof;
