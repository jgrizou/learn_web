from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

from tinydb import TinyDB, Query, where
db = TinyDB('db.json')
User = Query()

todos = {}


# from flask_restful import reqparse
#
# parser = reqparse.RequestParser()
# parser.add_argument('rate', type=int, help='Rate to charge for this resource')
# args = parser.parse_args()


from flask_restful import fields, marshal_with

resource_fields = {
    'task':   fields.String,
    'uri':    fields.Url('helloworld')
}

class TodoDao(object):
    def __init__(self, todo_id, task):
        self.todo_id = todo_id
        self.task = task

        # This field will not be sent in the response
        self.status = 'active'

class Todo(Resource):
    @marshal_with(resource_fields)
    def get(self, **kwargs):
        return TodoDao(todo_id='my_todo', task='Remember the milk')

api.add_resource(Todo, '/new')


class TodoSimple(Resource):
    def get(self, todo_id):
        todo = db.search(where(todo_id))
        return todo[0]

    def put(self, todo_id):
        todo = {todo_id: request.form['data']}
        db.insert(todo)
        return {'success': True}

api.add_resource(TodoSimple, '/<string:todo_id>')

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

api.add_resource(HelloWorld, '/')

class Purge(Resource):
    def get(self):
        db.purge()
        return {'success': True}

api.add_resource(Purge, '/purge')


class All(Resource):
    def get(self):
        return db.all()

api.add_resource(All, '/all')


if __name__ == '__main__':
    app.run(debug=True)
