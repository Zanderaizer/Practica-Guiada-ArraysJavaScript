let comida = []
comida.push('HotDog','Hamburguesa','Malteada','Pastel en hoja')
console.log(comida[3]);
comida.unshift('Empanada');
console.log(comida);
comida[4] = 'HotDog'
console.log(comida);
comida.shift(comida);/*eliminar primer elemento*/
console.log(comida);
comida.splice(2,1)
console.log(comida)
delete(comida[1])
console.log(comida)
comida[1] = 'Arro con mango'
console.log(comida)