/**
 * Private Class field.
 */
class Counter {
    #counter = 0;

    increment() {
        this.#counter++;
    }

    decrement() {
        this.#counter--;
    }

    get() {
        return this.#counter;
    }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.info(`Jumlah Counter setelah 5 kali increment. ${counter.get()}`);
console.info(counter);
