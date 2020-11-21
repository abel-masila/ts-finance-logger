declare class Invoice {
    client: string;
    details: string;
    amount: number;
    constructor(c: string, d: string, a: number);
    format(): string;
}
export default Invoice;
