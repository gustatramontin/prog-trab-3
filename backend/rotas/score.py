from geral.config import *
from modelo.User import *

# $ curl localhost:5000/api/create_score -X POST -d '{ "data": { "history": [], "authentication_token": "your token here" } }' -H 'Content-Type: application/json'

@app.route("/api/create_score", methods=["post"])
def create_score():
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

        "left_actor": id1,
        "right_actor": id2,
         

        "authentication_token": z
    }
    
    """

    token = score_data["data"]["authentication_token"]

    if not verify_token(token):
        return jsonify({
            "data": False
        })

    history = score_data["data"]["history"]   

    return jsonify({
        "data": True
    })