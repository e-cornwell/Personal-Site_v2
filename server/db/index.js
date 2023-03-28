const client = require('./client');

const dropTables = async () => {
    const SQL = `
        DROP TABLE IF EXISTS projects;
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS content;
    `;
    await client.query(SQL);
}

const syncTables = async () => {
    const SQL = `
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) NOT NULL UNIQUE,
            email VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(255),
            full_name VARCHAR(100),
            bio TEXT,
            website VARCHAR(255),
            created_at TIMESTAMP DEFAULT NOW(),
            isAdmin BOOLEAN default FALSE,
            image_url VARCHAR(255)
        );
        CREATE TABLE projects(
            id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(id),
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            project_url VARCHAR(255) NOT NULL,
            image_url VARCHAR(255)
        );
    `;
    await client.query(SQL);
}

const syncAndSeed = () => {
    console.log("Seeding");
    dropTables();
    syncTables();
    console.log("Seeding complete")
}

module.exports = {
    syncAndSeed,
    client
};