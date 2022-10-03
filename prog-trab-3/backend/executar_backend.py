from geral.config import *
import import_modelos
from rotas.actors import *

@app.route("/")
def inicio():
    return 'backend operante, operação de editar'

app.run(debug=True)