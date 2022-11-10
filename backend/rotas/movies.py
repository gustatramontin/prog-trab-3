from geral.config import *
from modelo.Movie import *

# $ curl localhost:5000/api/movies

@app.route("/api/movies")
def get_movies():

    movies = db.session.query(Movie).all()
    movies_json = [ m.json() for m in movies]


    return jsonify({
        "data": movies_json
    })