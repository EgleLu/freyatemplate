const store = Vue.reactive({
    state: {
        cartState: []
    },

    getCart() {
        axios.get('/cart.js')
            .then(response => {
                this.state.cartState.unshift(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
})

const miniCartState = Vue.reactive({
    hidden: true
})

const toggleMiniCart = {
    openCart() {
        miniCartState.hidden = !miniCartState.hidden
        menuState.hidden = true
    }
}

const menuState = Vue.reactive({
    hidden: true
})

const searchState = Vue.reactive({
    hidden: true
})

const toggleMenu = {
    openMenu() {
        menuState.hidden = !menuState.hidden
        miniCartState.hidden = true
    }
}

const toggleClose = {
    closeAll() {
        miniCartState.hidden = true
        menuState.hidden = true
        searchState.hidden = true
    }
}

const searchBar = {
    openSearch(){
        console.log(searchState.hidden);
        searchState.hidden = !searchState.hidden
    }
}