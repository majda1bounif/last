import os

from flask import Flask, render_template
from flask_ngrok import run_with_ngrok
app = Flask("__name__")
run_with_ngrok(app)

def start_ngrok():
    from pyngrok import ngrok

    url = ngrok.connect(5000).public_url
    print(' * Tunnel URL:', url)
if app.config['START_NGROK']:
    start_ngrok()
class Config:
    # ...
    START_NGROK = os.environ.get('START_NGROK') is not None

@app.route('/')
def hello():
    return render_template("index.html")


@app.route("/camera.html")
def camera():
    return render_template("camera.html")


@app.route("/location.html")
def location():
    return render_template("location.html")





if __name__ == "__main__":
    app.run()
