import { getHeroeById } from '../bases/06-importsAndExports';


/* const promesa = new Promise( (resolve, reject) => {
    setTimeout( ( ) =>{
        const heroe = getHeroeById(10); 
        if(heroe){
            resolve(heroe);
        }
        else {
            reject("No se pudo");
        }
         
    }, 2000 );
});

promesa.then( ( heroe ) => {
    console.log(heroe);
} )
.catch( error => console.warn(error)); */

const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {
        setTimeout( ( ) =>{
            const heroe = getHeroeById( id ); 
            heroe ? resolve( heroe ) : reject ("No se pudo");
             
        }, 1000 );
    });

}

getHeroeByIdAsync( 2 )
    .then( console.log )
    .catch( console.warn );