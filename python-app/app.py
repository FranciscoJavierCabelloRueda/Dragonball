from flask import Flask, jsonify, request # type: ignore
import mysql.connector # type: ignore
from flask_cors import CORS, cross_origin # type: ignore

app = Flask(__name__)
CORS(app, support_credentials=True, resources={r"*": {"origins": "*"}}) # Esto habilitará CORS para todos los dominios en todas las rutas
                                                                        # También, permitirá todas las solicitudes de cualquier origen
# Configuración de la base de datos
db_config = {
    'host': 'mysql-db',
    'user': 'root',
    'password': 'dejame',
    'database': 'dbzDB'
}

@app.route('/')
def home():
    return 'Servidor Flask funcionando...'

@app.route('/leer', methods=['GET'])
def leer():
    with mysql.connector.connect(**db_config) as conn:
        with conn.cursor(dictionary=True) as cursor:
            cursor.execute("SELECT * FROM personajes")
            personajes = cursor.fetchall()
    
    return jsonify({
        "success": True,
        "data": personajes,
        "message": "Personajes cargados de la BBDD correctamente"
    })


@app.route('/grabar', methods=['POST'])
def grabar():
    datos = request.json  # Obtiene los datos enviados en la solicitud POST
    nombre = datos.get('name')
    ki = datos.get('ki')
    max_ki = datos.get('max_ki')
    race = datos.get('race')
    gender = datos.get('gender')
    description = datos.get('description')
    image = datos.get('image')
    affiliation = datos.get('affiliation', 'None')  # Default value
    deleted_at = datos.get('deleted_at')

    with mysql.connector.connect(**db_config) as conn:
        with conn.cursor() as cursor:
            consulta = """INSERT INTO personajes (name, ki, max_ki, race, gender, description, image, affiliation, deleted_at)
                          VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"""
            cursor.execute(consulta, (nombre, ki, max_ki, race, gender, description, image, affiliation, deleted_at))
            conn.commit() 

    return jsonify({"success": True, "mensaje": "Personaje añadido correctamente"})

@app.route('/borrar', methods=['DELETE'])
def borrar():
    id_personaje = request.args.get('id', type=int)  # Obtener el ID desde los parámetros de la URL

    if not id_personaje:
        return jsonify({"success": False, "mensaje": "ID no proporcionado"}), 400

    with mysql.connector.connect(**db_config) as conn:
        with conn.cursor() as cursor:
            consulta = "DELETE FROM personajes WHERE id = %s"
            cursor.execute(consulta, (id_personaje,))
            conn.commit()

    return jsonify({"success": True, "mensaje": "Personaje eliminado correctamente"})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

