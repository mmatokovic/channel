import Fastify from "fastify"

export default function buildServer() {
    const server = Fastify()

    server.get('/ping', async (request, reply) => {
        return 'pong\n'
    })

    server.get("/", async function () {
        return { status: "OK" };
    });

    return server;
}

