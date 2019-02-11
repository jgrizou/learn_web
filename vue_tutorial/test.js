var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue! 2'
  }
})


var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString(),
    text: 'Hover your mouse over me for a few seconds to see my dynamically bound title!'
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

app5.$watch('message', function (newValue, oldValue) {
  console.log(oldValue + ' ' + newValue)
})

var appfoo = new Vue({
  el: '#app-foo',
  data: {
    foo: 'text',
  },
  created: function () {
    // `this` points to the vm instance
    console.log('foo is: ' + this.foo + ' ' + new Date().toLocaleString())
  },
  mounted: function () {
    // `this` points to the vm instance
    console.log('foo is mounted! ' + new Date().toLocaleString())
  },
  updated: function () {
    // `this` points to the vm instance
    console.log('foo is now: ' + this.foo)
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})


Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

var app8 = new Vue({
  el: '#app-8',
  data: {
    rawHtml: '<span style="color: red">This should be red</span>'
  }
})

var app9 = new Vue({
  el: '#app-9',
  data: {
    color: 'red',
    fontSize: 10,
    newcolor: '',
    isButtonDisabled: false,
    ButtonDisableAction: 'Disable',
    url: ''
  },
  methods: {
    changeColor: function () {
      this.color = this.newcolor
    },
    toggleDisable: function () {
      this.isButtonDisabled = !this.isButtonDisabled;
      if (this.isButtonDisabled) {
        this.ButtonDisableAction = 'Enable';
      } else {
        this.ButtonDisableAction = 'Disable';
      }
    }
  }
})

var vm_example = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})

var vm_binding = new Vue({
  el: '#binding',
  data: {
    message: 'Hello Binding',
    color: 'red',
    fontSize: 20,
    isOrange: false,
    ok: true
  },
  created: function () {
    // `this` points to the vm instance
    console.log('binding!')
  },
  computed: {
    styleObject: function () {
      return {
        color: this.color,
        fontSize: this.fontSize + 'px'
      }
    },
    classObject: function () {
      return {
        boxorange: this.isOrange,
      }
    }
  }
})


var vm_conditional = new Vue({
  el: '#conditional',
  data: {
    loginType: 'username',
    buttonAction: 'Use emails',
    inputvalue: '',
    show: true,
    showAction: 'Hide'
  },
  methods: {
    toggleinput: function () {
      if (this.loginType == 'username') {
        this.loginType = 'email';
        this.buttonAction = 'Use username';
      } else {
        this.loginType = 'username';
        this.buttonAction = 'Use emails';
      }
    },
    submit: function () {
      console.log(this.inputvalue);
      this.inputvalue = '';
    },
    toggleshow: function () {
      this.show = !this.show;
      if (this.show) {
        this.showAction = "Hide";
      } else {
        this.showAction = "Show";
      }
    }
  }
})

var vm_list = new Vue({
  el: '#list',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar'}
    ],
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    },
    numbers: [1,2,3,4,5,6,7,8,9,10],
    range: 5,
    todos: [
        'todo1',
        'todo2'
    ]
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
})


Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})

var vm_todo = new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})


var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})

var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // define methods under the `methods` object
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    }
  },
  methods: {
    warn: function (message, event) {
      // now we have access to the native event
      if (event) event.preventDefault()
      alert(message)
    },
    onCtrlClick: function () {
      console.log('right-click');
    },
    onKey: function () {
      console.log('key');
    }
  }
})


var app_key = new Vue({
  el: "#app_key",
  mounted() {
    window.addEventListener('keypress', (event) => {
      console.log(String.fromCharCode(event.keyCode));
    });
  }
})


Vue.component('button-counter', {
  data: function () {
    return {
      count: 0,
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

var comp_demo = new Vue({
  el: '#components-demo'
})



Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})


var comp_post = new Vue({
  el: '#components-posts',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue', content: 'Content'},
      { id: 2, title: 'Blogging with Vue', content: 'Content' },
      { id: 3, title: 'Why Vue is so fun', content: 'Content' }
    ],
    postFontSize: 1
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      console.log(enlargeAmount);
      this.postFontSize += enlargeAmount;
    }
  }
})

Vue.component('custom-input', {
  props: ['value'],
  template: `
    <div class="comp_input_test">
      <h3>Toto</h3>
      <input
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    </div>
  `
})

Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})

var comp_input = new Vue({
  el: '#components-input',
  data: {
    searchText: ''
  }
})
