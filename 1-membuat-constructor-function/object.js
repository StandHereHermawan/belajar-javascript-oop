/**
 * Membuat object dengan object.
 */
{
    const arief = {
        firstName: "Arief",
        lastName: "Hermawan",
    };

    const hilmi = {
        firstName: "Hilmi",
        lastName: "Muharrom",
    };
}

/**
 * Constructor Function single word.
 * huruf Kapital diawal Kata.
 */
function Person() {}

/**
 * Constructor Function multi word.
 * huruf Kapital diawal Kata, Kata kedua dan selanjutnya huruf pertama Kapital. 
 */
function PersonAlso() {}

/**
 * Membuat object dari Constructor Function.
 */
{
    const arief = new Person();
    const hilmi = new PersonAlso();
}
