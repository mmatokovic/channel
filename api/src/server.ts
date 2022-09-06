import Fastify, { FastifyRequest, FastifyReply } from "fastify"
import fastifyJwt, { JWT } from "@fastify/jwt";
import userRoutes from "./modules/user/user.route";
import { userSchemas } from "./modules/user/user.schema";
import productRoutes from "./modules/product/product.route";
import { productSchemas } from "./modules/product/product.schema";

/*
 * Create a hash with 1000 iterations
 */

declare module "fastify" {
  interface FastifyRequest {
    jwt: JWT;
  }
  export interface FastifyInstance {
    authenticate: any;
  }
}

declare module "@fastify/jwt" {
  interface FastifyJWT {
    user: {
      id: number;
      email: string;
      name: string;
    };
  }
}

export default function buildServer() {
    const server = Fastify()

    server.register(fastifyJwt, {
      secret: "ndkandnan78duy9sau87dbndsa89u7dsy789adb",
    });

    server.decorate("authenticate",
      async (request: FastifyRequest, reply: FastifyReply) => {
        try {
          await request.jwtVerify();
        } catch (error) {
          return reply.send(error);
        }
      }
    );
    
    server.addHook("preHandler", (req, reply, next) => {
      req.jwt = server.jwt;
      return next();
    });

    server.get('/ping', async () => {
        return 'pong\n'
    })

    server.get("/", async function () {
        return { status: "OK" };
    });

    for (const schema of [...userSchemas]) {
      server.addSchema(schema);
    }

    server.register(userRoutes, { prefix: "api/users" });

    return server;
}