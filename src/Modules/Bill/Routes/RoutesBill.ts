import { FastifyInstance } from "fastify";
import { MiddBill } from "../Middlewares/MiddBill";

export async function routesBill(app: FastifyInstance){
    const middBill = new MiddBill();
    app.post('/bill/create', async(request, reply) => {
        await middBill.createBill(request, reply);
    });
    app.get('/bill/list/:userId/:id', async(request, reply) => {
        await middBill.listBill(request, reply);
    });
    app.get('/bill/listAll/:userId', async(request, reply) => {
        await middBill.listAllBill(request, reply);
    });
    app.put('/bill/update/:id', async(request, reply) => {
        await middBill.updateBill(request, reply);
    });
    app.delete('/bill/delete/:id', async(request, reply) => {
        await middBill.deleteBill(request, reply);
    });
}