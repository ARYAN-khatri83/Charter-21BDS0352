
from signature_verifier import signature_verifier

signer_address = "0x123456789abcdef"  
signature_data = b'\x01' * 65         
signed_hash = b'\x01' * 32            
scheme_type = "ecdsa"                 

# Run verification
is_valid = signature_verifier(signer_address, signature_data, signed_hash, scheme_type)
print("Signature valid:", is_valid)
