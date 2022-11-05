/**
 * 1.TDZ 是暂行性的，当函数 f 使用 value 时，value 已经声明，所以没问题。
 * 2.若将函数最后两行调换，那么代码将运行失败，因为 f 尝试在 value 之前使用它。
 */
function temporalExample() {
    const f = () => { // TDZ（value 暂时不可用）
        console.log(value);
    };
    let value = 42; // value 可用
    f();
}
temporalExample();

/**
 * 1.块和函数一样，也存在 TDZ。
 * 2.不能在块的第一行使用 p。尽管它在函数中已经声明，但块内有一个覆盖声明取得了 p 标识符的所有权。因此，这个标识符只能引用新的
 *   内部 p，而且必须在 let 声明后。这有助于确定代码正在使用的是哪个 p，以避免混淆。
 */
function blockExample(str) {
    let p = 'prefix'; // 外部的'p'
    if (str) {
        p = p.toUpperCase(); // 报错
        str = str.toUpperCase();
        let p = str.indexOf('X'); // 内部的'p'
        if (p!= -1) {
            str = str.substring(0, p);
        }
    }
    return p + str;
}

/**
 * name 先声明，Promise.resolve 后执行，也可以输出 name 的值
 */
function test() {
    Promise.resolve().then(() => {
        console.log(name);
    });
    let name = 'guozheng';
}
test();