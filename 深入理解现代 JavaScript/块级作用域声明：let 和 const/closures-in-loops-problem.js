/**
 * 1.循环中的闭包问题。
 * 2.这段代码输出的是 4 4 4，因为直到循环结束时，计时器的回调才会运行。当它们调用回调时，counter 的值是4，因为它是用 var
 *   声明的，所以 counter 在整个 closuresInLoopsProblem 函数中定义。3个计时器回调都引用了同一个 counter 变量，因此它们
 *   得到的值都是4。
 */
function closuresInLoopsProblem() {
    for (var counter = 1; counter <= 3; ++counter) {
        setTimeout(function() {
            console.log(counter);
        }, 0);
    }
}
closuresInLoopsProblem();