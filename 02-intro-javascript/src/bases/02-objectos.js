const persona = {
    name: "Franco",
    apellido: "Toñanes",
};

console.table(persona);

const persona2 = {...persona}; //copia el objeto
persona2.name = "Roberto";

console.table(persona2);
