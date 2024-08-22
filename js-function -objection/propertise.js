var shoppingCard = {
        keyboard: 5,
        mouse: 4,
        pen: 6,
        book: 12,
        mobile: 1,
        yearPhone: 1,
        sunglass: 4
    }
    // console.log(shoppingCard);
    // var propertyName = 'mouse';
    // var propertyValue = shoppingCard(propertyName);
    // console.log(propertyValue, propertyName);

var properties = Object.keys(shoppingCard);
console.log(properties);
shoppingCard.mobile = 4;
var propertiesValue = Object.values(shoppingCard);
console.log(propertiesValue)