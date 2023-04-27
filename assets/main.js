const { createApp } = Vue

createApp({
    data() {
    return {
        //lasciamo il v-model vuoto per tenere traccica di cio che l'utente amdrà ad inserire 
        newText:'',

        todos: [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            }
        ]


        }
    },
    methods: {

        elimina(index){
            this.todos.splice(index, 1)
        },


        newTodo(){
            //creiamo il collegamento con l'arrey di oggetti, ricreiamo la struttura di un oggetto nel quale sara inserito
            // il testo dell'utente salvato precedentemente nel v-model
            //'unshift' ci permetterà di salvare il testo in cima
            this.todos.unshift(
                {
                    text: this.newText,
                    done: false,
                }
            )
        }
        
    }
}).mount('#app')

