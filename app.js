const app = Vue.createApp({
  data() {
      return {
        showBooks: true,
        title: 'The Final Empire',
        author: 'Brandon sanderson',
        age:45
      }
  },
  methods: {
   ToggleShowBooks() {
    this.showBooks = !this.showBooks
   },
   handleEvent() {
     console.log('event')
   }
  }

})

app.mount('#app')

