from flask import Flask
from flask import url_for
from flask import request
from flask import redirect
from flask import render_template

from werkzeug.utils import secure_filename


app = Flask(__name__)

@app.route('/')
def index():
    return 'Index Page'

@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return 'User %s' % username

@app.route('/post/<int:post_id>')
def show_post(post_id):
    # show the post with the given id, the id is an integer
    return 'Post %d' % post_id

@app.route('/path/<path:subpath>')
def show_subpath(subpath):
    # show the subpath after /path/
    return 'Subpath %s' % subpath

@app.route('/projects/')
def projects():
    return 'The project page'

@app.route('/about')
def about():
    return 'The about page'

@app.route('/user/<username>')
def profile(username):
    return '{}\'s profile'.format(username)

@app.route('/hello/')
@app.route('/hello/<name>')
def hello(name=None):
    return render_template('hello.html', name=name)

@app.route('/login', methods=['POST', 'GET'])
def login():
    error = 'GET'
    print(request.form)
    if request.method == 'POST':
        error = request.form['message']
    return render_template('hand_login.html', error=error)

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['data']
        f.save('/Users/jgrizou/Downloads/' + secure_filename(f.filename))
    return render_template('upload.html')


@app.route('/toto')
def toto():
    return redirect(url_for('login'))

@app.errorhandler(404)
def page_not_found(error):
    return render_template('page_not_found.html'), 404

with app.test_request_context():
    print(url_for('index'))
    print(url_for('login'))
    print(url_for('login', next='/'))
    print(url_for('profile', username='John Doe'))
    print(url_for('static', filename='style.css'))


if __name__ == '__main__':
    app.run()
