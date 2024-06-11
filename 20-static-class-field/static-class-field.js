/**
 * Static Class Field
 */
class Configuration {
    static name = "Belajar JavaScript OOP";
    static version = 1.0;
    static author = "Arief Karditya Hermawan";
}

const config = new Configuration();
console.info(config);

console.info(Configuration.name);
console.info(Configuration.version);
console.info(Configuration.author);

Configuration.author = "Arief Karditya";
console.info(Configuration.author);
