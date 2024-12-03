interface ITransaction{
    id:string
    UserId: string
    type: "income"|"expense"
    amount:number
    category:string
    date:Date
}
export default ITransaction;