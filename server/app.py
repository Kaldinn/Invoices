from flask import Flask, jsonify, request
from services.wtforms import AddInvoice, AddProducts

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret_key'


@app.route('/get_product', methods=['POST'])
def add_invoice():
    form = AddProducts()
    
    if request.method == 'POST' and form.validate():
        product_name = form.product_name.data
        quantity = form.quantity.data
        price = form.price.data
        vat = form.vat.data

        print(product_name)
        response_data = {'message': 'Product added successfully'}
        return jsonify(response_data), 200
    else:
        error_message = {'error': 'Invalid form data'}
        return jsonify(error_message), 400


if __name__ == '__main__':
    app.run(debug=True)