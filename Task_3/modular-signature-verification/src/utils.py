
def bytes_to_int(data):
    """Convert a byte array to an integer."""
    return int.from_bytes(data, byteorder='big')

def split_signature(signature, scheme_type):
    """Split signature data based on the scheme type.
       Assumes ECDSA and Schnorr require v, r, and s components.
       RSA may just need one component.
    """
    if scheme_type in ["ecdsa", "schnorr"]:
        # Assuming v, r, s are 1 byte, 32 bytes, and 32 bytes respectively
        v = signature[0]
        r = bytes_to_int(signature[1:33])
        s = bytes_to_int(signature[33:])
        return v, r, s
    elif scheme_type == "rsa":
        return bytes_to_int(signature),  # RSA usually has one component
    else:
        raise ValueError("Unsupported signature scheme")
