/**
 * 1.循环中的闭包，用 let 解决。
 * 2.这段代码输出的是 1 2 3。该循环创建了多个 counter 变量，供循环中的计时器回调函数引用，每个迭代都有自己的 counter 变量。
 */
function closuresInLoopsWithLet() {
    for (let counter = 1; counter <= 3; ++counter) {
        setTimeout(function() {
            console.log(counter);
        }, 10);
    }
}
closuresInLoopsWithLet();