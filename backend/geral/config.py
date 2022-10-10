# importações
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import os

from hashlib import blake2s
from base64 import b64encode, b64decode

from flask_cors import CORS # permitir back receber json do front

# configurações
app = Flask(__name__)
CORS(app) # aplicar o cross domain
# caminho do arquivo de banco de dados
path = os.path.dirname(os.path.abspath(__file__)) 
arquivobd = os.path.join(path, 'banco.db')
# sqlalchemy
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///"+arquivobd
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False # remover warnings
db = SQLAlchemy(app)