class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes #£${this.amount} for ${this.details}`;
    }
}
export default Invoice;
