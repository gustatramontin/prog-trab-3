from geral.config import *
from modelo.Movie_Cast import *

@app.route("/api/match/<int:movie_id>/<int:actor_id>")
def is_it_a_match(movie_id, actor_id):

    movies = db.session.query(Movie_Cast).filter_by(movie_id=movie_id,actor_id=actor_id).first()
    print(movies)

    its_a_match = True if movies else False
    return jsonify({
        "data": its_a_match
    })