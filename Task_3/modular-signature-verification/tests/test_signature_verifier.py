# tests/test_signature_verifier.py
# tests/test_signature_verifier.py
import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../src')))

from signature_verifier import signature_verifier  # Importing from src directly


def test_signature_verifier_ecdsa():
    signer_address = "0x123456789abcdef"
    signature_data = b'\x01' * 65  # Placeholder for actual ECDSA signature data
    signed_hash = b'\x01' * 32  # Placeholder for actual ECDSA signed hash
    scheme_type = "ecdsa"
    
    assert signature_verifier(signer_address, signature_data, signed_hash, scheme_type) == True

def test_signature_verifier_schnorr():
    signer_address = "0x123456789abcdef"
    signature_data = b'\x01' * 65  # Placeholder for actual Schnorr signature data
    signed_hash = b'\x01' * 32  # Placeholder for actual Schnorr signed hash
    scheme_type = "schnorr"
    
    assert signature_verifier(signer_address, signature_data, signed_hash, scheme_type) == True

def test_signature_verifier_rsa():
    signer_address = "0x123456789abcdef"
    signature_data = b'\x01' * 65  # Placeholder for actual RSA signature data
    signed_hash = b'\x01' * 32  # Placeholder for actual RSA signed hash
    scheme_type = "rsa"
    
    assert signature_verifier(signer_address, signature_data, signed_hash, scheme_type) == True
