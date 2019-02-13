let store = {drivers: [], passsengers: [], trips: []};

let driverId = 0;

class Driver{
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }
trips() {
  return store.trips.filter(trip => {
    return trip.driverID == this.id
  })
}


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
