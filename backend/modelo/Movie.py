from geral.config import *

class Movie(db.Model):
    # atributos da pessoa
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(254))
    img_path = db.Column(db.String(254))

    # método para expressar a pessoa em forma de texto
    def __str__(self):
        return self.name + "[id="+str(self.id)+ "], " 
    # expressao da classe no formato json
    def json(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "email": self.email,
            "telefone": self.telefone
        }
