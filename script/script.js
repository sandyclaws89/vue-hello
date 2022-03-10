/*Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/

/*DICHIARO LA VARIABILE APP (SPAZIO DOVE OPERA VUEJS IN HTML) E CI METTO LA FUNZIONE NEW VUE*/
const app = new Vue({
    el: '#root',
    data: {
      message: '',
      message2: '',
      classList: {
          class1: "yellow",
          class2: "bckBlue",
      },
      srcImg: "https://picsum.photos/200/200",
    },
    methods:{
        btnTest1: function() {
            this.message = '';
            this.message = `Ho premuto il bottone e sono nel campo msg2`;
            // this.message = '';
            function (){
                this.message ='';

            }
        },
        btnTest2: function() {
            this.message2 =`Ho premuto il bottone e sono nel campo msg2`
        }

    }
})