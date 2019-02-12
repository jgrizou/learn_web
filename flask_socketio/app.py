import os

# this get our current location in the file system
import inspect
HERE_PATH = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))


from flask import Flask, render_template
from flask_socketio import SocketIO, emit


template_folder=os.path.join(HERE_PATH, 'client', 'dist')
template_folder=os.path.join(HERE_PATH, '../parcel_vue_default/dist')
template_folder=os.path.normpath(template_folder)
print(template_folder)

app = Flask(__name__, template_folder=template_folder)
app.config['SECRET_KEY'] = 'secret!'


socketio = SocketIO(app)

import time
import numpy as np

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('connect')
def test_connect():
    print('Client connected')

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')

@socketio.on('receive')
def handle_message(message):
    print('received {} at {}'.format(message, time.time()))
    # time.sleep(0.1)
    emit('response', message)

if __name__ == '__main__':
    socketio.run(app)
