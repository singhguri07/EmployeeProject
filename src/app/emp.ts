export class users
{
    id:string;
    type:string;
    pass:string;
    name:string;
    email:string;
    mob:string;
    desig:string;
   
    constructor(id: string,pass: string,type: string,name: string,email: string,mob: string,desig: string)
    {
        this.id=id;
        this.type=type;
        this.pass=pass;
        this.name=name;
        this.email=email;
        this.mob=mob;
        this.desig=desig;
    }
}