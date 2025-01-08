import { FastifyRequest, FastifyReply } from "fastify";
import { serviceAuth } from "../Service/serviceAuth";
import bcrypt from "bcrypt";

export class MiddAuth{
    private ServiceAuth : serviceAuth;
    constructor(){
        this.ServiceAuth = new serviceAuth();
    }
    async handleAuthUser(request: FastifyRequest, reply: FastifyReply) {
        const { email, password } = request.body as { email: string; password: string };
        const user = await this.ServiceAuth.AuthUser({
            email,
            password,
            name: '',
            id: '2121'
        });
        if (!user) {
            return reply.status(400).send({ error: "Invalid email or password" });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return reply.status(400).send({ error: "Invalid email or password" });
        }
        const token = request.server.jwt.sign({ id: user.id, email: user.email });
        return reply.status(200).send({ token });
    }}