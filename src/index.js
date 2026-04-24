function getNumber(target, start = 1) {
    function recurse(current, expr) {
        if (current === target) return expr;
        if (current > target) return null;

        const multiply = recurse(current * 3, `(${expr} * 3)`);
        if (multiply !== null) return multiply;

        const add = recurse(current + 5, `(${expr} + 5)`);
        if (add !== null) return add;

        return null;
    }
    return recurse(start, `${start}`);
}
console.log(getNumber(18));
