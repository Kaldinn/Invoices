from flask import Flask, jsonify
from services.wtforms import AddInvoice, AddProducts

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret_key'

@app.route('/api/add_invoice', methods=['GET'])
def add_invoice():
    form = AddInvoice()
    x = {
        "daniel":23,
        "natalia":22
    }
    return jsonify(x)


if __name__ == '__main__':
    app.run(debug=True)