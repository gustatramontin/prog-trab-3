from geral.config import *
from modelo.Actor import *
from modelo.Movie import *
from modelo.Movie_Cast import *

from modelo.User import *
from modelo.Score import *
import json
import pandas as pd

def run():

    df = pd.read_csv("geral/tmdb_5000_credits.csv")
    actors = {

    }
    movies = []

    movies_cast = []
    for index, movie in df.iterrows():
        movie_obj = Movie(name=movie["title"], img_path="somewhere movies")
        movies.append(movie_obj)
        cast = json.loads(movie["cast"])
        for actor in cast:
            if not actors.get(actor["id"]):
                actors[actor["id"]] = Actor(name=actor["name"], img_path="")

            movie_cast = Movie_Cast(movie=movie_obj, actor=actors[actor["id"]])
            movies_cast.append(movie_cast)
    """
    print("TESTE DE PESSOA")
    
    p1 = Pessoa(nome = "João da Silva", email = "josilva@gmail.com", 
    telefone = "47 99012 3232")
    p2 = Pessoa(nome = "Maria Oliveira", email = "molive@gmail.com", 
        telefone = "47 98822 2531")        
    """


    user1 = User(name="roberto", password="1234", img_path="somewhere")

    with app.app_context():
        for movie in movies:
            db.session.add(movie)
        for actor_id, actor in actors.items():
            db.session.add(actor)
        for movie_cast in movies_cast:
            db.session.add(movie_cast)

        db.session.commit()

        print("Actors from avengers")

        for key, val in actors.items():
            if val == "Chris Evans":            
                print(key, val)
        print(user1)