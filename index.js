// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0
let customerId = 0
let mealId = 0
let deliveryId = 0

class Neighborhood {
  constructor(name) {
    this.id = ++neighborhoodId
    this.name = name

    store.neighborhoods.push(this)

  }
}

class Customer {
  constructor(name, neighborhood) {
    this.id = ++customerId
    this.name = name
    this.neighborhoodId = neighborhoodId

    store.customers.push(this)
    
  }
}
