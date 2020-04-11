'use strict';

const connect = require('./lib/connectMongo');
const anuncios = require('./models/anuncios')

connect.once('open', async () => {
    try {
        await initAnuncios();
        console.log("La importacion se realiza correctamente.")
        connect.close();
    } catch (err) {
        console.error('Hubo un error: ', err)
        process.exit(1);
    }
});

async function initAnuncios() {
    await anuncios.deleteMany();
    await anuncios.insertMany([
        { name: 'Galletas', sell: true, price: 2, photo: 'galletas.JPG', tags: ['lifestyle','work'] },
        { name: 'Moto', sell: false, price: 60000, photo: 'moto.JPG', tags: ['motor'] },
        { name: 'Chocoflakes', sell: true, price: 2.52, photo: 'chocoflakes.JPG', tags: ['lifestyle'] },
        { name: 'Chocoflakes2', sell: false, price: 3.50, photo: 'chocoflakes2.JPG', tags: ['lifestyle'] },
        { name: 'Aston Martin', sell: false, price: 290500, photo: 'astonmartin.JPG', tags: ['motor'] },
        { name: 'Iphone 11', sell: false, price: 630, photo: 'iphone.JPG', tags: ['mobile','work'] },
    ]);
}