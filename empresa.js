// function dedupe(list) {
  
//   for (let i = 0; i < list.length; i++) {
//     //posicion disponible para el minimo
//     let posMin = i;
//     for (let j = i + 1; j < list.length; j++) {
//       // console.log(list[posMin].id)
//       //j=puntero que busca el minimo 
//       if (list[posMin].id === list[j].id) {
//         console.log(list[posMin])
//         list.splice(j)
        
//       }
//     }
//     let aux = list[posMin];
//     list[posMin] = list[i];
//     list[i] = aux

//   }
   
//   return list;
// }

// let list = [
//   {
//     id: 2,
//     name: 'John Doe'
//   },
//   {
//     id: 1,
//     name: 'Jane Doe'
//   },
//   {
//     id: 3,
//     name: 'Samuel Soe',
//     phone: '+12223334444'
//   },
//   {
//     id: 2,
//     name: 'John Doe'
//   },
//   {
//     id: 4,
//     name: 'John Doe'
//   }
// ]
// dedupe(list)
