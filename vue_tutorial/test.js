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
