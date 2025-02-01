# Card-Validation
This project includes a JavaScript function that validates credit card numbers and identifies the card type using regular expressions.

## Supported Card Types & Regex Patterns

### MasterCard

(/^5[1-5][0-9]{14}$/)
Starts with 5 and is followed by a digit between 1-5 (5[1-5]).
Contains exactly 16 digits ([0-9]{14}).

### Visa 

(/^4[0-9]{12}([0-9]{3})?$/)
Starts with 4.
Contains either 13 or 16 digits ([0-9]{12} with an optional 3 more digits [0-9]{3}?).

### American Express (Amex) 

(/^3[47][0-9]{13}$/)
Starts with 3, followed by either 4 or 7 (3[47]).
Contains exactly 15 digits ([0-9]{13}).
