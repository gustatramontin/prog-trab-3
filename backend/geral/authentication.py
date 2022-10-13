
from base64 import b64encode, b64decode

def generate_token(user):
    
    token = f"{user.name}.{1671937200}"
    encrypted_token = b64encode(token.encode("utf-8")).decode("utf-8")

    return encrypted_token

def verify_token(token):
    decrypted_token = b64decode(token).decode()
    tokens = decrypted_token.split(".")

    if len(tokens) != 2:
        return False

    return True    