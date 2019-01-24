# js函数

## 函数的定义和调用

~~~js
function abs(x) {
			if(x >= 0) {
				return x;
			} else {
				return -x;
			}
		}
~~~

上述代码：function指出这是一个**函数定义**；abs是函数的名称；（x）指的是参数，多个参数之间用，分隔；**{...}**之间的代码是**函数体**，可以包含任意语句，也可以没有语句。注意：**js函数**也是一个**对象**，上述定义的abs()函数实际上是一个函数对象，而**函数名abs**可以视为指向该函数的**变量**，因此上述函数也可以如下所写：

```js
 var abs = function (x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};
```

此时function(x){...}为一个**匿名函数**，没有函数名，但是这个匿名函数赋值给了变量abs,所以通过变量abs可以调用。

## 函数中的return语句

**注意return语句，因为JavaScript引擎有一个在行末自动添加分号的机制，这可能让你栽到return语句的一个大坑**。**如下所示**

```js
function foo () {
     return {name:'foo'};
 }
 foo();  //输出{name: "foo"}

function foo () {
   return 
          {name:'foo'};
 }
 foo();  //输出undefined
```

undefined原因是上述第二个代码函数变成了如下：

```js
function foo () {
  return ;       //自动添加了分号，相当于return undefined;
  {name:'foo'};     // 这行语句已经没法执行到了
}
foo();
```

上述问题若一行解决不了，可以如下这样写：

```js
function foo () {
  return {
    name:'foo'
    };
}
foo(); //成功输出{name: "foo"}
```

## var与let的区别

**let是块作用域，var是整个封闭函数内的全局作用域**

```js
function sum(){
   var sum=0;
   for(let i=0;i<100;i++){ //此时let定义的i是块作用域，因此不能在函数外使用
      sum+=i;
   }
   i+=1; //报错，Uncaught ReferenceError: i is not defined
   return sum; 
 }
```

## 解析赋值,对多个变量同时赋值

### 数组赋值

```js
var [x,y,z]=['a','b','c'];
console.log('x='+x,'y='+y,'z='+z);//输出x=a,y=b,z=c
```

### 对象赋值

```js
 var person={
   name:'dora',
   age:18,
   sex:'女'
 }
 var {name,age,sex}=person;
 console.log('name:'+name,'age:'+age,'sex:'+sex);
```

有些时候，如果变量已经被声明了，再次赋值的时候，正确的写法也会报语法错误,这是因为JavaScript引擎把**{**开头的语句当作了**块处理**，于是=不再合法。解决方法是用**小括号**括起来,如下所示

```js
  var x,y;
  ({x,y}={name:'小明',x:2,y:2});
```

## 方法

### 绑定到对象上的函数叫做方法

```js
 var xiaoming={
   name:'d',
   birth:1990,
   age:function () {
      var y=new Date().getFullYear(); //获取当前年份
      return y-this.birth; //在一个方法内部，this是一个特殊变量，它始终指向当前对象
   }
 }
 console.log(xiaoming.age()); //28
```

上述把方法age绑定到xiaoming这个对象上

**如果把函数拆开，this就不是指向当前对象xiaoming,而是全局对象window**

```js
 function getAge () {
    var y=new Date().getFullYear();
    return  y-this.birth;
  }
var xiaoming={
       name:'d',
       birth:1990,
       age:getAge
   }
console.log(xiaoming.age());  //28,如果以对象的方法形式调用，比如xiaoming.age()，该函数的this指向被调用的对象，也就是xiaoming
console.log(getAge());//NaN,因为如果单独调用函数，比如getAge()，此时，该函数的this指向全局对象，也就是window
```

