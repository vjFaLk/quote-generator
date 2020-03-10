new Vue({
    el: '#app',
    data () {
      return {
        quote: { quote: "Lorem ipsum dolor sit amet" , author: "Valmik Jangla"}
      }
    },
    mounted () {
      axios
        .get('/api/quote')
        .then(response => (this.quote = response))
    }
  })