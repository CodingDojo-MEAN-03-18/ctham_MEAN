function orderSupplies(item, callback) {
    let warehouse; //undefined
    const deliveryTime = Math.random() * 3000;
  
    setTimeout(function() {
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions: function() { return 'mix it!' }
        },
        brush: {
          product: 'Horsehair brush',
          directions: function() { return 'start painting!' }
        }
      };
  
      callback(warehouse[item]);
    }, deliveryTime);
  }
  
  function receivedItem(item) {
    console.log(`Received ${item.product} time to ${item.directions()}`);
  }
  
//   orderSupplies('paint', receivedItem);
//   orderSupplies('brush', receivedItem);

//******************************************** */
// Solution 

var itemOrder = null;

  orderSupplies('paint', function(item) {
    receivedItem(item);
    if (itemOrder != null) {
        receivedItem(itemOrder);
    } else {
        itemOrder = item;
    }
  });

  orderSupplies('brush', function(item) {
    // receivedItem(item);
    if (itemOrder != null) {
        receivedItem(itemOrder);
    } else {
        itemOrder = item;
    }
  });


