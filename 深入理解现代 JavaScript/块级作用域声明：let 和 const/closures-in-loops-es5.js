/**
 * 1.循环中的闭包，标准的 ES5 解决方案。
 * 2.这段代码输出的是 1 2 3，因为计时器回调函数使用的是 value，而不是 counter，并且匿名包装函数的每一次调用都会有
 *   自己的 value 参数，作为自由变量供计时器回调函数引用。因为没有其他地方改变这些 walue 参数，所以回调函数会输出
 *   预期的值。
 */
 function closuresInLoopsES5() {
    for (var counter = 1; counter <= 3; ++counter) {
        (function(value) {
            setTimeout(function() {
                console.log(value);
            }, 10);
        })(counter);
    }
}
closuresInLoopsES5();