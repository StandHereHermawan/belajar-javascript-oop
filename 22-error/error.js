/**
 * Throw error.
 */
class MathUtil {
    static sum(...numbers) {
        if (numbers.length === 0) {
            throw new Error("Total Parameter harus lebih dari 0.");
        }

        let total = 0;
        for (const number of numbers) {
            total += number;
        }
        return total;
    }
}

const total = MathUtil.sum(5, 4, 3, 2, 1);
console.info(`MathUtil.sum(5,4,3,2,1): ${total}`);
console.info(MathUtil.sum());
