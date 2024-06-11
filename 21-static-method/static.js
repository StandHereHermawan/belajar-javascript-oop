/**
 * Static Method
 */
class MathUtil {
    static sum(...numbers) {
        let total = 0;
        for (const number of numbers) {
            total += number;
        }
        return total;
    }
}

const total = MathUtil.sum(5, 4, 3, 2, 1);
console.info(`MathUtil.sum(5,4,3,2,1): ${total}`);
