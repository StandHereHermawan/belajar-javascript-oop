/**
 * Membuat Counter Iterator Result
 */
class CounterIteratorResult {
    constructor(value, done) {
        this.done = done;
        this.value = value;
    }
}

/**
 * Membuat Counter Iterator
 */
class CounterIterator {
    constructor(value, max) {
        this.value = value;
        this.max = max;
    }

    next() {
        try {
            if (this.value > this.max) {
                return new CounterIteratorResult(this.value, true);
            } else {
                return new CounterIteratorResult(this.value, false);
            }
        } finally {
            this.value++;
        }
    }
}

/**
 * Membuat Counter Iterable
 */
class Counter {
    constructor(value, max) {
        this.value = value;
        this.max = max;
    }

    [Symbol.iterator]() {
        return new CounterIterator(this.value, this.max);
    }
}

/**
 * Menggunakan Counter Iterable
 */
const counter = new Counter(1,15);
for (const element of counter) {
    console.info(`Element ke-${element}`);
}