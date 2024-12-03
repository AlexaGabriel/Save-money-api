import fastify from "fastify";
import fastifyCors from "@fastify/cors";

const app = fastify({logger: true});
app.register(fastifyCors);


app.get('/', async (request, reply) => {
    reply.send({ message: 'Hello, Alex!' });
  });

const start = async () => {
    try {
        await app.listen({ port: 3000 });
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};
start();