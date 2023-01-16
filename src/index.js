module.exports = function reverse(n) {
    // x = n.toString().split("");.reverse().map(Number).join("");
    n = n + "";
    if (n.charAt() == "-") {
        x = n.substring(1);
        return x.split("").reverse().join("");
    } else if (n.charAt(-1) == "0") {
        x = n.slice(0, -1);
        return x.split("").reverse().join("");
    } else {
        return n.split("").reverse().join("");
    }
};
