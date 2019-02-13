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
