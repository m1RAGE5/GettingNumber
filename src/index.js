function getNumber(target, current = 1) {
    if (current === target) return "1";
    if (current > target) return null;

    const multiply = getNumber(target, current * 3);
    if (multiply !== null) return `(${multiply} * 3)`;

    const add = getNumber(target, current + 5);
    if (add !== null) return `(${add} + 5)`;

    return null;
}

console.log(getNumber(18));
