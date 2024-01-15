from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
app = Flask(__name__)

@app.route('/', methods=['GET'])
def get_data():
    data = {
        'name': 'John Doe',
        'age': 30,
        'email': 'john.doe@example.com'
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)