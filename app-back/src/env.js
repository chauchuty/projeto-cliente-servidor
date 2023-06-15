export default {
    server: {
        port: 20000
    },
    db: {
        url:'./src/database/db.sqlite',
        sync: false
    },
    jwt: {
        secret: 's3cr3t'
    }
}