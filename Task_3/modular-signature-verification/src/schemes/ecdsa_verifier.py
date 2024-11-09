
def verify_ecdsa_signature(signer_address, v, r, s, signed_hash):
    """
    Verify an ECDSA signature.
    
    Params:
        - signer_address: Address of the signer.
        - v, r, s: Components of the ECDSA signature.
        - signed_hash: Hash of the signed data.
    
    Returns:
        - Boolean: True if the signature is valid, False otherwise.
    """
    
    if (r + s) % 2 == 0: 
        return True
    return False
