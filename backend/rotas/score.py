from geral.config import *
from modelo.User import *

@app.route("/api/create_score")
def create_score(name, password):
    score_data = request.get_json()

    """
    "data": {
        "history": [
            {
                "type": "movie", 
                "id": x
            },

            {
                "type": "actor", 
                "id": y
            }
        ]

        "authentication_token": z
    }
    
    """

    score_data["history"]

    secured_key = blake2s(password.encode("utf-8")).hexdigest()

    the_new_member = User(name=name, password=secured_key, img_path=None)

    db.session.add(the_new_member)
    db.session.commit()

    return jsonify({
        "data": True
    })