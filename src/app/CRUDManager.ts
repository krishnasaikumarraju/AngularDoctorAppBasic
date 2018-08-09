import {Identifiable} from "./Identifiable";

export class CRUDManager<T extends Identifiable>{
    mydata:T[]=[];

    create(e:T):void{
        this.mydata.push(e);
    }

    find(n:number):T{
        let result:T;
        for(let i = 0; i<this.mydata.length; i++){
            let temp = this.mydata[i];
            if(temp.getId() == n){
                result = temp;
                break;
            }
        }
        return result;
    }

    update(e:T):boolean{
        let result:boolean=false;
        for(let i=0; i<this.mydata.length; i++){
            let temp=this.mydata[i];
            if(temp.getId()==e.getId()){
                this.mydata[i]=e;
                result=true
                break;
            }
        }
        return result;

    }

    delete(n:number):boolean{
        let result:boolean=false;
        for(let i=0; i<this.mydata.length; i++){
            let temp=this.mydata[i];
            if(temp.getId()==n){
                this.mydata.splice(i,1);
                result=true;
                break;
            }
        }
        return result;
    }

    getAll():T[]{
        return this.mydata;
    }

}
