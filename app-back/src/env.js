export default {
    server: {
        port: 24000
    },
    db: {
        url:'./src/database/db.sqlite',
        sync: false
    },
    jwt: {
        secret: 's3cr3t'
    }
}