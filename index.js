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

  deliveries(){
    return store.deliveries.map(delivery => {
      return delivery.neighborhood()
    })
  }
}

class Customer {
  constructor(name, neighborhood) {
    this.id = ++customerId
    this.name = name
    this.neighborhoodId = neighborhoodId - 1

    store.customers.push(this)

  }
}

class Meal {
  constructor(title, price) {
    this.id = ++mealId
    this.title = title
    this.price = price

    store.meals.push(this)

  }
}

class Delivery {
  constructor(meal, neighborhood, customer) {
    this.id = ++deliveryId
    this.mealId = mealId - 1
    this.neighborhoodId = neighborhoodId - 1
    this.customerId = customerId - 1

    store.deliveries.push(this)
  }

  neighborhood(){
    return store.neighborhoods.find(neighborhood => {
      return neighborhood.id === this.neighborhoodId
    })
  }
}
