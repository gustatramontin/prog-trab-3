from geral.config import *
from modelo.Movie import *
from modelo.Actor import *

class Movie_Cast(db.Model):
    # atributos da pessoa
    id = db.Column(db.Integer, primary_key=True)
    
    movie_id = db.Column(db.Integer, db.ForeignKey(Movie.id), nullable=False)
    actor_id = db.Column(db.Integer, db.ForeignKey(Actor.id), nullable=False)

    movie = db.relationship("Movie", foreign_keys=movie_id)
    actor = db.relationship("Actor", foreign_keys=actor_id)

    # método para expressar a pessoa em forma de texto
    def __str__(self):
        return f"Movie {self.movie}\n Actor {self.actor}" 
    # expressao da classe no formato json
    def json(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "email": self.email,
            "telefone": self.telefone
        }
