import { PrismaClient } from "@prisma/client";

/*
 * See https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/constructor for options
 * Instance of the Prisma Client
 */
export const db = new PrismaClient({
    log: [
      { level: 'warn', emit: 'event' },
      { level: 'info', emit: 'event' },
      { level: 'error', emit: 'event' },
    ],
});

db.$on('warn', (e) => {
    console.log(e)
})

db.$on('info', (e) => {
    console.log(e)
})

db.$on('error', (e) => {
    console.log(e)
})

async function main() {
    const countUsers = await db.user.count({})
}

main()
    .then(async () => {
        await db.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await db.$disconnect()
        process.exit(1)
    })