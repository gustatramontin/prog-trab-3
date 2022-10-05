from geral.config import *
from modelo.User import *
from modelo.Actor import *

class Score(db.Model):
    # atributos da pessoa
    id = db.Column(db.Integer, primary_key=True)
    score = db.Column(db.Integer)
    path_size = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id), nullable=False)
    user = db.relationship("User")

    left_actor_id = db.Column(db.Integer, db.ForeignKey(Actor.id), nullable=False)
    left_actor = db.relationship("Actor", foreign_keys=left_actor_id)

    right_actor_id = db.Column(db.Integer, db.ForeignKey(Actor.id), nullable=False)
    right_actor = db.relationship("Actor", foreign_keys=right_actor_id)
    
    # método para expressar a pessoa em forma de texto
    def __str__(self):
        return f"Score: {self.score}\nPath: {self.path_size}\nUser: {self.user.name}\nActors: {self.left_actor.name}, {self.right_actor.name}"
    # expressao da classe no formato json
    def json(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "email": self.email,
            "telefone": self.telefone
        }
