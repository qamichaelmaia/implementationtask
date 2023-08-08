function MaxDivCom(a, b) {
    if (b === 0) {
        return a;
    } else {
        return MaxDivCom(b, a % b);
    }
}

const num1 = 76
const num2 = 14

const mdc = MaxDivCom(num1, num2);
console.log(`O MDC de ${num1} e ${num2} é ${mdc}`);