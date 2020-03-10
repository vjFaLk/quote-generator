new Vue({
    el: '#app',
    data() {
        return {
            quote: null,
            loading: false
        }
    },
    mounted() {
        this.loading = true
        axios
            .get('/api/quote')
            .then(response => {
            this.loading = false
            this.quote = response.data
            })
    }
})