'use strict';

const connect = require('./lib/connectMongo');
const anuncios = require('./models/anuncios')

connect.once('open', async () => {
    try {
        await initAnuncios();
        connect.close();
    } catch (err) {
        console.error('Hubo un error: ', err)
        process.exit(1);
    }
});

async function initAnuncios() {
    await anuncios.deleteMany();
    await anuncios.insertMany([
        { name: 'Galletas', sell: true, price: 2, photo: 'galletas.jpg', tags: ['lifestyle','motor'] },
        { name: 'Moto', sell: false, price: 60000, photo: 'moto.jpg', tags: ['motor'] },
    ]);
}