from flask import Flask, render_template
from flask_socketio import SocketIO
import os

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

messages = []

@socketio.on('new_value')
def handle_new_value(new_value):
    messages.append(new_value)
    socketio.emit('respond_new_value', "Added %s to the list! Your list is now: %s" % (new_value, ", ".join(messages)))
    print(messages)

if __name__ == '__main__':
    socketio.run(app, host="localhost", port=5000)