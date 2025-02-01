
function card_validate(cardNo) {
  var masterCardRegex = /^(?:5[1-5][0-9]{14})$/;
  var visaCardRegex = /^(?:4[0-9]{12})(?:[0-9]{3})$/;
  var americanExpCardRegex = /^(?:3[47][0-9]{13})$/;

  var cardName = "-";
  if (masterCardRegex.test(cardNo)) {
      cardName = "This is a Master Card";
  } else if (visaCardRegex.test(cardNo)) {
      cardName = "This is a Visa Card";
  } else if (americanExpCardRegex.test(cardNo)) {
      cardName = "This ia an American Express Card";
  }
  else{
    cardName = `This card is invalid`
  }
  return cardName;
}


console.log(card_validate("5105105105105100")); // Master Card
console.log(card_validate("4111111111111111")); // Visa Card
console.log(card_validate("378282246310005"));  // American Express Card
console.log(card_validate("1234567890123456")); // Invalid case
