import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import routesUser from "../Modules/User/Routes/RoutesUser";
import routesTransaction from "../Modules/Transaction/Routes/RoutesTransaction";
import routesStatitics from "../Modules/Statistics/Routes/RoutesStatistics";
import routesGoal from "../Modules/Goal/Routes/RoutesGoal";
import { routesBill } from "../Modules/Bill/Routes/RoutesBill";

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
        app.register(routesBill);
        await app.listen({ port: 3000 });
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};
start();