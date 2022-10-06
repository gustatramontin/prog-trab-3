from geral.config import *
import import_modelos
from rotas.actors import *
from rotas.movies import *
from rotas.match import *

@app.route("/")
def inicio():
    return 'backend operante, operação de editar'

app.run(debug=True)