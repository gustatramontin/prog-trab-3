from geral.config import *
import import_modelos
from rotas.actors import *
from rotas.movies import *
from rotas.match import *
from rotas.incorporate import *
from rotas.authenticate import *
from rotas.score import *

@app.route("/")
def inicio():
    return f'{request.host} Bienvenue dans mon backend, le lien de le github est: https://github.com/gustatramontin/prog-trab-3, si vous voulez le front-end, le lien est: {request.host.split(":")[0]+":5500"} '

app.run(debug=True, host="0.0.0.0")