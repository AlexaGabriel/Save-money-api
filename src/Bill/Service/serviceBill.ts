import { IBill, IRepoBill } from "../Types/InterfaceBill";
import { RepoBill } from "../Repositories/RepoBill";
import { SBillU } from "../Schema/SchemaBill";

export class serviceBill {
    private repoBill: IRepoBill;
    constructor(){
        this.repoBill = new RepoBill();
    }
    async createBill(data: IBill){
        /*const validate = SBill.safeParse(data);
        if(!validate.success){
            const errorMessages = validate.error.issues.map(issue => issue.message).join(", ");
            throw new Error(`Validation failed: ${errorMessages}`);
        }*/
        const create = await this.repoBill.CreateBill(data);
        return create;
    }
    async listBill(userId: string, id: string){
        const list = await this.repoBill.ListBill(userId, id);
        return list;
    }
    async listAllBill(userId: string){
        const list = await this.repoBill.ListAllBill(userId);
        return list;
    }
    async updateBill(id: string, data: IBill){
        const validate = SBillU.safeParse(data);
        if(!validate.success){
            const errorMessages = validate.error.issues.map(issue => issue.message).join(", ");
            throw new Error(`Validation failed: ${errorMessages}`);
        }
        const update = await this.repoBill.UpdateBill(id, data);
        return update;
    }
    async deleteBill(id: string){
        const deleteBill = await this.repoBill.DeleteBill(id);
        return deleteBill;
    }
}