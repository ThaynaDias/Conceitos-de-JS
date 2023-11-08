const LIST = [
    {
        id: 1,
        nome: 'Mestre Yoda',
        avatar: 'img/yoda.png'
    },

    {
        id: 2,
        nome: 'LUKE SKYWALKER',
        avatar: 'img/luke.png'
    },

    {
        id: 3,
        nome: 'PRINCESA LEIA',
        avatar: 'img/leia.png'
    },

    {
        id: 4,
        nome: 'DART VADER',
        avatar: 'img/vader.png'
    },

    {
        id: 5,
        nome: 'HAN SOLO',
        avatar: 'img/hansolo.png'
    },

    {
        id: 6,
        nome: 'CHEWBACCA',
        avatar: 'img/chewbacca.png'
    },

    {
        id: 7,
        nome: 'C3PO',
        avatar: 'img/c3po.png'
    },

    {
        id: 8,
        nome: 'R2D2',
        avatar: 'img/r2d2.png'
    }



]


const App = new  Vue({
    el: '#app', 
    data: {
       title: 'Personagem do Star Wars Lego',
       userName: 'Thay',
       characters: LIST,
       searchName: ''
    },

    methods: {
        like(userName){
            alert(`O personagem ${userName} recebeu um like!`)
        },  

        remove(id){
            const list = this.characters

            const result = list.filter(item => {
                return item.id !== id
            
            })

            this.characters = result
        },

        search(){

            if(this.searchName === ''){
                return alert('O campo de buscar é obrigatório')
            }

            const list = this.characters = LIST

            const result = list.filter(item => {
                return item.nome === this.searchName          
            })

            if (result.length <= 0 ){
                alert('Nenhum registro encontrado.')
            } else {
            this.characters = result
            }
        }
    }
})