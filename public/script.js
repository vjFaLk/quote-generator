new Vue({
    el: '#app',
    data () {
      return {
        quote: null
      }
    },
    mounted () {
      axios
        .get('/api/quote')
        .then(response => (this.quote = response.data))
    }
  })