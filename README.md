# 简答题
## 1、
引用计数  

工作原理：给声明的变量赋值一个引用类型的值时，则这个值的引用次数就是1，如果把当前值又赋值给另一个变量，则引用次数就会加1；如果包含这个值的变量又被赋予的另一个值，则该值的引用次数就会减1，直到引用次数为0时，就会被当作垃圾回收，释放其占用的内存空间。

优点：发现垃圾时会立即进行释放回收，最大限度减少程序暂停
缺点：无法回收循环引用的对象，时间开销大

## 2、
标记整理算法  
工作流程：遍历所有对象找到标记的活动对象，然后把所有活动对象统一整理移动到左侧一端，然后对右侧所有没有被标记的对象进行回收处理

## 3、
V8内存空间一分为二，左侧小空间用于存储新生代对象；新生代内存区分为两个相同大小的空间，使用空间为From,空闲空间为To；活动对象存储于From空间；经过标记整理后将活动对象拷贝至To空间；From与To交换空间完成释放回收

## 4、
新生代区域的内容往老生代区域移动并且老生代区域所剩空间不够放入新生代对象内容时，会使用标记整理进行空间优化，把碎片空间回收，同时使用增量标记算法进行回收效率的提升优化  
程序执行过程中，V8引擎会遍历对象进行标记，会先对第一层可达对象标记，然后暂停，等待程序执行，执行一会后遇到可达的对象，会暂停程序执行，然后标记对象，如此循环，最终进行垃圾回收，回收完成继续执行程序。

# 代码题1

## 练习1
```
let isLastInStock = function(cars){
    let last_car =  fp.flowRight(fp.prop('in_stock'), fp.last) 
    return last_car(cars)
}
```


## 练习2
```
let isFirstName = function(cars){
    let first_car = fp.flowRight(fp.prop('name'), fp.first)
    return first_car(cars)
}
```


## 练习3
```
let averageDollarValue = function(cars){
    let dollar_values = fp.flowRight(_average, fp.map(car => car.dollar_value))
    return dollar_values(cars)
}
```

## 练习4
```
let _underscore = fp.replace(/\W+/g, '_')

let sanitizeNames = function(cars){
    let r = fp.flowRight(fp.map(_underscore), fp.map(x => fp.toLower(x.name)))
    return r(cars)
}
console.log(sanitizeNames(cars))
```

# 代码题2

## 练习1
```
let maybe = Maybe.of([5, 6, 1])
let ex1 = fp.curry(function(maybe, x){
    let r = fp.map(fp.add(x))
    return r(maybe._value)
})
console.log(ex1(maybe)(5))
```

## 练习2
```
let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
let ex2 = function (xs) {
    return fp.first(xs._value)
}
console.log(ex2(xs))
```

## 练习3
```
let safeProp = fp.curry(function(x, o){
    return Maybe.of(o[x])
})
let user = {id: 2, name: "Albert"}

let ex3 = function(user){
    return fp.first(safeProp('name')(user)._value)
}
console.log(ex3(user))
```

## 练习4
```
let ex4 = function(n){
    return Maybe.of(n).map(x => parseInt(x))._value
}
console.log(ex4())
```