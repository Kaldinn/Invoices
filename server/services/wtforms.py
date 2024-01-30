from flask_wtf import FlaskForm
from wtforms import StringField, DateField, BooleanField, StringField, FloatField, SelectField, IntegerField
from wtforms.validators import DataRequired

class AddInvoice(FlaskForm):
    invoice_date = DateField('Invoice Date', validators=[DataRequired()])
    sell_date = DateField('Sell date', validators=[DataRequired()])
    payment_method = SelectField('Payment Method', validators=[DataRequired()])
    payment_date = DateField('Payment Date', validators=[DataRequired()])

class AddProducts(FlaskForm):
    product_name = StringField('Product Name', validators=[DataRequired()])
    quantity = IntegerField('Quantity', validators=[DataRequired()])
    price = FloatField('Price', validators=[DataRequired()])
    vat = IntegerField('Vat', validators=[DataRequired()])