import { HasFormatter } from "./../interfaces/HasFormatter.js";
declare class Payments implements HasFormatter {
    readonly recipient: string;
    private details;
    amount: number;
    constructor(recipient: string, details: string, amount: number);
    format(): string;
}
export default Payments;
