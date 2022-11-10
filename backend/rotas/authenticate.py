from geral.config import *
from modelo.User import *

# $ curl localhost:5000/api/authenticate/username/password

@app.route("/api/authenticate/<string:name>/<string:password>")
def authenticate_user(name, password):

    """
    authentication token

    name.expiration_date(unix_time)

    """

    hashed_key = blake2s(password.encode("utf-8")).hexdigest()

    the_user = db.session.query(User).filter_by(name=name, password=hashed_key).first()
    print(the_user)
    if not the_user:
        return jsonify({
            "data":  {
                "status": False
            } 
        })
    token = generate_token(the_user)

    return jsonify({
        "data": {
            "status": True,
            "token": token
        }
    })