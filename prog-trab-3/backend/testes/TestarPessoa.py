from geral.config import *
from modelo.Actor import *
from modelo.Movie import *
from modelo.Movie_Actor import *

def run():
    """
    print("TESTE DE PESSOA")
    
    p1 = Pessoa(nome = "João da Silva", email = "josilva@gmail.com", 
    telefone = "47 99012 3232")
    p2 = Pessoa(nome = "Maria Oliveira", email = "molive@gmail.com", 
        telefone = "47 98822 2531")        
    """
    
    print("Test Actor")
    a1 = Actor(name="Robert Downey Jr", img_path="somewhere")
    print("Test Movie")
    m1 = Movie(name="Avengers", img_path="somewhere movies")

    ma1 = Movie_Actor(movie=m1, actor=a1)

    db.session.add(a1)
    db.session.add(m1)
    db.session.add(ma1)

    db.session.commit()
    print(a1)
    print(m1)

    print(ma1)