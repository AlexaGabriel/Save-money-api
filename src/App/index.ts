import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import routesUser from "../Routes/RoutesUser";
import routesTransaction from "../Routes/RoutesTransaction";
import routesStatitics from "../Routes/RoutesStatistics";
import routesGoal from "../Routes/RoutesGoal";

const app = fastify({logger: true});
app.register(fastifyCors);


app.get('/', async (request, reply) => {
    reply.send({ message: 'Hello, Alex!' });
  });

const start = async () => {
    try {
        app.register(routesUser);
        app.register(routesTransaction);
        app.register(routesStatitics);
        app.register(routesGoal);
        await app.listen({ port: 3000 });
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};
start();