// consents dto
export class ConsentsDTO {
    name: string;
    email: string;
    aggrements: string[];

    constructor(_name: string, _email: string, _aggrements:string[]) {
        this.name = _name,
        this.email = _email,
        this.aggrements = _aggrements
    }
}