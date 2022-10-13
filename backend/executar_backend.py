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
    return 'backend operante, operação de editar'

app.run(debug=True)