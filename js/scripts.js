var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal = "Zielone słonie";

//zamiana tekstu na wielkie litery:
var animalUpperCased = animal.toUpperCase();
console.log(animalUpperCased);

//zamiana 'Papugi' na 'Zielone slonie':
var textChanged = text.replace('Papugi', animalUpperCased);
console.log(textChanged);

//wyświetlenie połowy zmienionego zdania:
var halfTextChanged = textChanged.slice(0,textChanged.length/2);
console.log(halfTextChanged);