/*Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/

// const app = new vue({
// el: '#app',
//     data: {
//         message: ''
//     }
// })

const app = new Vue({
    el: '#root',
    data: {
      message: '',
      message2: '',
      classList: {
          class1: "yellow",
          class2: "bckBlue",
      } 
    }
  })