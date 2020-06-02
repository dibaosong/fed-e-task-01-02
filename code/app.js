const fp = require('lodash/fp')

const cars = [
    {
        name: "Ferrari FF", 
        horsepower: 660,
        dollar_value: 700000,
        in_stock: true 
    },
    {
        name: "Spyker c12 Zagato", 
        horsepower: 650,
        dollar_value: 648000,
        in_stock: false 
    },
    {
        name: "Jaguar XKR-S", 
        horsepower: 550,
        dollar_value: 132000,
        in_stock: false 
    },
    {
        name: "Audi R8", 
        horsepower: 525,
        dollar_value: 114200,
        in_stock: false 
    },
    {
        name: "Aston Martin One-77", 
        horsepower: 750,
        dollar_value: 1850000,
        in_stock: true 
    },
    {
        name: "Pagani Huayra", 
        horsepower: 700,
        dollar_value: 1300000,
        in_stock: false 
    }
]

// let isLastInStock = function(cars){
//     let last_car = fp.last(cars)
//     return fp.prop('in_stock', last_car)
// }

// let isLastInStock = function(cars){
//     let last_car =  fp.flowRight(fp.prop('in_stock'), fp.last) 
//     return last_car(cars)
// }
// console.log(isLastInStock(cars))

// let isFirstName = function(cars){
//     let first_car = fp.flowRight(fp.prop('name'), fp.first)
//     return first_car(cars)
// }
// console.log(isFirstName(cars))


// let _average = function(xs){
//     return fp.reduce(fp.add, 0, xs) /xs.length
// }

// let averageDollarValue = function(cars){
//     let dollar_values = fp.map(function(car){
//         return car.dollar_value
//     }, cars)
//     return _average(dollar_values)
// }

// let averageDollarValue = function(cars){
//     let dollar_values = fp.flowRight(_average, fp.map(car => car.dollar_value))
//     return dollar_values(cars)
// }

// console.log(averageDollarValue(cars))


// let _underscore = fp.replace(/\W+/g, '_')

// let sanitizeNames = function(cars){
//     let r = fp.flowRight(fp.map(_underscore), fp.map(x => fp.toLower(x.name)))
//     return r(cars)
// }
// console.log(sanitizeNames(cars))

class Container {
    static of (value) {
        return new Container(value)
    }
    constructor (value) {
        this._value = value
    }
    map (fn) {
        return Container.of(fn(this._value))
    }
}
class Maybe {
    static of (x) {
        return new Maybe(x)
    }
    isNothing () {
        return this._value === null || this._value === undefined
    }
    constructor (x) {
        this._value = x
    }
    map (fn) {
        return this.isNothing() ? this : Maybe.of(fn(this._value))
    }
}

// let maybe = Maybe.of([5, 6, 1])
// let ex1 = fp.curry(function(maybe, x){
//     let r = fp.map(fp.add(x))
//     return r(maybe._value)
// })
// console.log(ex1(maybe)(5))




// let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
// let ex2 = function (xs) {
//     return fp.first(xs._value)
// }
// console.log(ex2(xs))

// let safeProp = fp.curry(function(x, o){
//     return Maybe.of(o[x])
// })
// let user = {id: 2, name: "Albert"}

// let ex3 = function(user){
//     return fp.first(safeProp('name')(user)._value)
// }
// console.log(ex3(user))

// let ex4 = function(n){
//     // if(n){
//     //     return parseInt(n)
//     // }
//     return Maybe.of(n).map(x => parseInt(x))._value
// }
// console.log(ex4())