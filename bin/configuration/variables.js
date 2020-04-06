const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb://admin:nofood123456@ds257981.mlab.com:57981/nofood'
    }
}
module.exports = variables;