/**
 * Error Handling
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

try {
    console.info(MathUtil.sum());
    console.info("Kode Block akan Berhenti.");
} catch (error) {
    // Block catch tidak akan dieksekusi jikalau tidak terjadi error.
    console.error(`Terjadi error : ${error.message}`);
}

console.info("Kode Program tidak berhenti karena error sudah di try catch.");

/**
 * Kata Kunci Finally
 */
try {
    console.info(MathUtil.sum());
    console.info("Kode Block akan Berhenti.");
} catch (error) {
    console.error(`Terjadi error : ${error.message}`);
} finally {
    // Block kode pada kata kunci finally selalu dieksekusi meskipun terjadi error atau tidak terjadi error.
    console.info(
        "Kode Program tidak berhenti karena error sudah di try catch."
    );
}

/**
 * Try Finally tanpa menggunakan catch
 */
class Counter {
    constructor() {
        this.value = 1;
    }

    next() {
        try {
            return this.value;
        } finally {
            this.value++;
        }
    }
}

const counter = new Counter();
for (let i = 0; i < 5; i++) {
    console.info(`counter.next(): ${counter.next()}`);
}
