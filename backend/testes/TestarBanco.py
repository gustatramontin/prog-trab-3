from geral.config import *
from modelo.Actor import *
from modelo.Movie import *
from modelo.Movie_Cast import *

from modelo.User import *
from modelo.Score import *

def run():
    """
    print("TESTE DE PESSOA")
    
    p1 = Pessoa(nome = "João da Silva", email = "josilva@gmail.com", 
    telefone = "47 99012 3232")
    p2 = Pessoa(nome = "Maria Oliveira", email = "molive@gmail.com", 
        telefone = "47 98822 2531")        
    """
    
    a1 = Actor(name="Joaquin Phoenix", img_path="https://upload.wikimedia.org/wikipedia/commons/d/d1/Joaquin_Phoenix_in_2018.jpg")
    a2 = Actor(name="Robert Downey Jr", img_path="https://upload.wikimedia.org/wikipedia/commons/d/d3/Robert_Downey%2C_Jr._2012.jpg")
    a3 = Actor(name="Chris Evans", img_path="https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg")
    
    m1 = Movie(name="Avengers", img_path="somewhere movies")
    m2 = Movie(name="Joker", img_path="somewhere movies")

    ma1 = Movie_Cast(movie=m1, actor=a2)
    ma2 = Movie_Cast(movie=m1, actor=a3)
    ma3 = Movie_Cast(movie=m2, actor=a1)

    user1 = User(name="roberto", password="1234", img_path="somewhere")
    score_user1 = Score(score=100, path_size=3, user=user1, left_actor=a1, right_actor=a2)

    with app.app_context():
        db.session.add(a1)
        db.session.add(a2)
        db.session.add(a3)
        
        db.session.add(m1)
        db.session.add(m2)

        db.session.add(ma1)
        db.session.add(ma2)
        db.session.add(ma3)

        db.session.commit()

        print("Actors from avengers")
        m1_movies = db.session.query(Movie_Cast).filter(Movie_Cast.movie_id == m1.id)
        for movie in m1_movies:
            print(movie)
        print()
        print(user1)

        print(score_user1)