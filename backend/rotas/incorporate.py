from geral.config import *
from modelo.User import *

# $ curl localhost:5000/api/incorporate/username/password

@app.route("/api/incorporate/<string:name>/<string:password>")
def incorporate_user(name, password):
    secured_key = blake2s(password.encode("utf-8")).hexdigest()

    the_new_member = User(name=name, password=secured_key, img_path=None)

    db.session.add(the_new_member)
    db.session.commit()

    return jsonify({
        "data": True
    })