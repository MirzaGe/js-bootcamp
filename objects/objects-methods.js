let restaurant = {
    name: 'Silver Spoon',
    guestCapacity: 75,
    guestCount: 73,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    }
}

let status = restaurant.checkAvailability(1)

console.log(status)