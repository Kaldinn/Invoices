from flask import Flask, jsonify, request
from services.wtforms import AddInvoice, AddProducts

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret_key'

@app.route('/get_product', methods=['POST'])
def add_invoice():
    form = AddProducts()
    

    if form.validate():
        print('valid')
        product_name = request.form.get('product_name')
        quantity = request.form.get('quantity')
        price = request.form.get('price')
        vat = request.form.get('vat')
        print(product_name)
        print(quantity)
        print(price)
        print(vat)

        response_data = {'message': 'Product added successfully'}
        return jsonify(response_data), 200
    else:
        error_message = {'error': 'Invalid form data'}
        return jsonify(error_message), 600


if __name__ == '__main__':
    app.run(debug=True)