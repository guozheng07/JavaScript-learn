/**
 * 1.所有的计时器函数都引用了同一个 outside 变量（因为它是循环外声明的）。但是它们又引用了各自的 inside 变量。
 * 2.输出：
 * - inside = 1, outside = 4
 * - inside = 2, outside = 4
 * - inside = 3, outside = 4
 */
function closuresInWhileLoops() {
    let outside = 1;
    while (outside <= 3) {
        let inside = outside;
        setTimeout(function() {
            console.log("inside = " + inside + ", outside = " + outside);
        }, 10);
        ++outside;
    }
}
closuresInWhileLoops();