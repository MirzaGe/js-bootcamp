let restaurant = {
    name: 'Silver Spoon',
    guestCapacity: 75,
    guedtCount: 0,
    checkAvailability: function (partySize) {
        console.log(partySize)
    }
}

restaurant.checkAvailability(4)
