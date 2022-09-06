import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
    try {
      //
      // Update "const data = []" to match your data model and seeding needs
      //
      const data: Prisma.UserCreateArgs['data'][] = [
        // To try this example data with the User model in schema.prisma,
        //
        { 
            name: 'alice',
            email: 'alice@example.com',
            salt:'sol',
            password: 'sifra',
            products: {
                create: [],
            },
        },
      ]
      console.log(
        "\nUsing the default '.api/db/seed.{js,ts}' template\nEdit the file to add seed data\n"
      )
  
      // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
      // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
      Promise.all(
        //
        // Change to match your data model and seeding needs
        //
        data.map(async (data: Prisma.UserCreateArgs['data']) => {
          const record = await db.user.create({ data })
          console.log(record)
        })
      )
    } catch (error) {
      console.warn('Please define your seed data.')
      console.error(error)
    }
}