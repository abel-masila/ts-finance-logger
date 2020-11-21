import { HasFormatter } from "./../interfaces/HasFormatter.js";
export default class ListTemplate {
    private container;
    constructor(container: HTMLUListElement);
    render(item: HasFormatter, heading: string, position: "start" | "end"): void;
}
