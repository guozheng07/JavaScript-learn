## 提升和暂时性死区
### var 变量提升
在进入 xx 函数时，JS 引擎会在逐行执行代码之前扫描函数，处理 var 声明并创建必要的变量，它会把“声明”提升到函数的顶部。执行此操作时，它将使用默认值 undefined 初始化其声明的变量。

### Temporal Dead Zone（TDZ）
从表面上，let 声明没有像 var 声明那样被提升到函数的顶部。但这是一个普遍的误解：let 和 const 声明也被提升了，但使用一种名为“暂时性死区”的概念。它指的是代码执行过程中的一段时间，**在此期间无法使用标识符，也不能引用外部作用域中的变量。** 
```
let answer; // 外部的 'answer'
function noInitializedYet() {
    answer = 42;
    console.log(answer); // 报错
    let answer; // 内部的'answer'
}
noInitializedYet()
```
JS 引擎会在代码中查找 let 和 const 声明，并在开始逐行执行代码之前处理它们。但是，引擎没有让 answer 变量成为可访问的变量并将其初始值设置为 undefined，而是将它标记为“尚未初始化”。当程序的执行进入有变量声明的作用域时，TDZ 便开始了，一直持续到运行变量声明（可能有初始化表达式时）。上面的例子中，内部的 answer 变量存在于 noInitializedYet 函数的开头（TDZ 开始的地方），并在声明所在的地方（TDZ 结束的地方）被初始化。  
**要理解 TDZ 是暂时性的，只与时间有关，与空间无关。**它并非指一个作用域顶部不能使用标识符的地方，而是指不能使用标识符的一段时间。  
示例：tdz-is-temporal.js

## 一种新的全局变量
在 ES5及更早版本，所有全局变量都是全剧对象的属性。ES2015 改变了这一点：现在 JS 有传统的用 var 创建的全局变量（也是全局对象的属性），也有新式的全局变量（不是全局对象的属性）。**如在全局作用域中使用 let 和 const 声明变量，则会创建这种新式的全局变量。**
虽然这些全局变量不是全局对象的属性，但仍可以在任何地方访问它们。
```
let answer = 42;
console.log("this.answer ==" + this.answer); // this.undefined == undefined
console.log("has property?" + ("answer" in this)); // has property? false
```

## const：JS 的常量
**常量引用的对象仍然是可变的。** 这块可以通过学习 Just JavaScript 课程中关于 object 的心智模型来细致理解。
```
// 该函数将带有给定 HTML 的段落添加到父元素上
function addParagraph(parent, html) {
    const p = document.createElement("p");
    p.innerHTML = html;
    parent.appendChild(p);
    return p;
}
```
上述代码只改变了段落的状态，没有改变 p 指向的段落，所以可以将 p 声明为常量。

## 循环中的块级作用域
**每个循环迭代都有自己的块变量，正如对同一函数的不同调用都有自己的局部变量一样。** 所以块级作用域可以解决经典的“循环中的闭包”问题。  
示例：closures-in-loops-problem.js、closures-in-loops-es5.js、closures-in-loops-with-let.js



