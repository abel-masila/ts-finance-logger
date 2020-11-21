import { HasFormatter } from "./../interfaces/HasFormatter.js";
declare class Invoice implements HasFormatter {
    readonly client: string;
    private details;
    amount: number;
    constructor(client: string, details: string, amount: number);
    format(): string;
}
export default Invoice;
