import Vue from 'vue'

const app = new Vue({
  data: {
    hello: 'welcome to vue',
    test: 'fine'
  },
  template: '<div id="app">{{hello}}</div>'
})

export { app }
