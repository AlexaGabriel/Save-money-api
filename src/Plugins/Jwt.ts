import { FastifyInstance } from "fastify";
import { fastifyJwt } from "@fastify/jwt";
import  { FastifyReply, FastifyRequest } from "fastify";

export default async function Jwt(app: FastifyInstance) {
    app.register(fastifyJwt, {
        secret: process.env.JWT_SECRET!,
    });

    app.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            await request.jwtVerify();
        // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
        } catch (error) {
            reply.status(401).send({ error: "Unauthorized" });
        }
    });
}