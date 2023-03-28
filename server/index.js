const app = require('./server');
const {syncAndSeed, client} = require('./db');

const init = async () => {
    try {
        await client.connect();
        if(process.env.MODE === 'seed'){
            await syncAndSeed();
        }
        const port = process.env.PORT || 3000;
        const server = app.listen(port, () => 
            console.log(`listening on port ${port}`)
        );
    } catch (ex) {
        console.log(ex);
    }
};

init();