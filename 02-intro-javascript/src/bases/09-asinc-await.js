

/* const getImagenPromesa = () => new Promise( resolve => resolve('img'));



getImagenPromesa()
    .then(console.log); */



const getImage = async( ) => {

    try {
        const apiKey = 'ctQgYUTZGUgbbvuYZZgEbxL0MxwyAlX0';

        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    
        const { data } = await resp.json();
    
        const { url } = data.images.original;
    
        const img = document.createElement('img');
    
        img.src = url;
    
        document.body.append( img );
        
    } catch (error) {
        //Lo manejamos badre
        
    }


}

getImage()

