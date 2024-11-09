# src/signature_verifier.py

from schemes.ecdsa_verifier import verify_ecdsa_signature
from schemes.schnorr_verifier import verify_schnorr_signature
from schemes.rsa_verifier import verify_rsa_signature
from utils import split_signature

def signature_verifier(signer_address, signature_data, signed_hash, scheme_type):
    """
    Main function to verify signatures across different schemes.
    
    Params:
        - signer_address: Address of the signer.
        - signature_data: Raw byte data of the signature.
        - signed_hash: Hash of the data that was signed.
        - scheme_type: Type of signature scheme (e.g., "ecdsa", "schnorr", "rsa").
        
    Returns:
        - Boolean: True if the signature is valid, False otherwise.
    """
    # Split signature into components
    try:
        components = split_signature(signature_data, scheme_type)
        print(f"[DEBUG] Split signature components for scheme '{scheme_type}': {components}")
    except ValueError as e:
        print(f"[ERROR] Failed to split signature: {e}")
        return False
    
    # Dispatch to the appropriate verification function
    if scheme_type == "ecdsa":
        result = verify_ecdsa_signature(signer_address, *components, signed_hash)
        print(f"[DEBUG] ECDSA verification result: {result}")
        return result
    elif scheme_type == "schnorr":
        result = verify_schnorr_signature(signer_address, *components, signed_hash)
        print(f"[DEBUG] Schnorr verification result: {result}")
        return result
    elif scheme_type == "rsa":
        result = verify_rsa_signature(signer_address, components[0], signed_hash)
        print(f"[DEBUG] RSA verification result: {result}")
        return result
    else:
        print(f"[ERROR] Unsupported signature scheme: {scheme_type}")
        return False
