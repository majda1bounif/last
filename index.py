import os
from flask import Flask, render_template
#from flask_ngrok import run_with_ngrok
app = Flask("__name__")
#run_with_ngrok(app)


@app.route('/')
def hello():
    return render_template("index.html")


@app.route("/camera.html")
def camera():
    return render_template("camera.html")


@app.route("/location.html")
def location():
    return render_template("location.html")


try:
        from cryptography import x509
        from cryptography.x509.oid import NameOID
        from cryptography.hazmat.backends import default_backend
        from cryptography.hazmat.primitives import hashes
        from cryptography.hazmat.primitives.asymmetric import rsa
except ImportError:
        raise TypeError("Using ad-hoc certificates requires the cryptography library.")

backend = default_backend()
pkey = rsa.generate_private_key(
        public_exponent=65537, key_size=2048, backend=backend
    )
#ssl_context="adhoc"
if __name__ == "__main__":
    app.run(host='0.0.0.0', ssl_context="adhoc", debug=True)
