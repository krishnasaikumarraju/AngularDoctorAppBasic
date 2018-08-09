import {Identifiable} from './Identifiable'

export class Doctor implements  Identifiable{
    id: number;
    name: string;
    experience: number;
    fees: number;
    img: string;

    constructor(id_p: number = 0, name_p:string = '', exp_p:number = 0, fee_p:number = 0.0, img_p:string=''){
      this.id = id_p;
      this.name = name_p;
      this.experience = exp_p;
      this.fees = fee_p;
      this.img= img_p;
    }

    getId(): number{
        return this.id;
    }

}
