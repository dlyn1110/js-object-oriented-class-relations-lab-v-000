let store = {drivers: [], passengers: [], trips: []}

let driverId = 0

class Driver {
    constructor(name){
        this.id = ++driverId
        this.name = name
        store.drivers.push(this)
    }

trips() {
    return store.trips.filter(trip => {
        return trip.driverId === this.id
    })
}
 passengers() {
   return this.trips().map(trip => {
     return trip.passenger
   })
 }
 }
