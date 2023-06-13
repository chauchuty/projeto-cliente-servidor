export default {
    server: {
        port: 20000
    },
    db: {
        url:'./src/database/db.sqlite',
        sync: true
    },
    jwt: {
        secret: 's3cr3t'
    }
}