/*Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/

/*DICHIARO LA VARIABILE APP (SPAZIO DOVE OPERA VUEJS IN HTML) E CI METTO LA FUNZIONE NEW VUE*/
// const app = new Vue({
//     el: '#root',
//     data: {
//       message: '',
//       message2: '',
//       classList: {
//           class1: "yellow",
//           class2: "bckBlue",
//       },
//       srcImg: "https://picsum.photos/200/200",
//     },
//     methods:{
//         btnTest1: function() {
//             this.message = '';
//             this.message = `Ho premuto il bottone e sono nel campo msg2`;
//             // this.message = '';
//             function (){
//                 this.message ='';

//             }
//         },
//         btnTest2: function() {
//             this.message2 =`Ho premuto il bottone e sono nel campo msg2`
//         }

//     }
// })


arrString = ['pippo', 'pluto','PAPERINO'];
// console.log(arrString);

for (let i=0; i < arrString.length; i++) {
//   console.log (arrString[i]);
//   for(n=0; n < arrString[i].length; n++) {
    arrString[i][0] = arrString[i][0].toUpperCase();
    console.log(arrString[i][0]);
    
  
//   }
//   console.log (arrString);
    
}
console.log(arrString)
// console.log(arrString)

// arrSting.forEach((element, index) => {
//     arrSting[index]= arrSting[0].toUpperCase();
// });
// console.log(arrSting)

