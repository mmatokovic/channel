import buildServer from "./server"

const server = buildServer();

server.listen({ port: 3000, host: '127.0.0.1' }, (error, address) => {
    if (error) {
      console.error(error)
      process.exit(1)
    }
    console.log(`
    🚀 Server ready at: ${address}
    `)
});