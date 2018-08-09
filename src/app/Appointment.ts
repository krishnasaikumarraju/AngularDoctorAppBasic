import {Identifiable} from './Identifiable'

class Appointment implements Identifiable{
    id: number;
    getId(): number{
        return this.id;
    }
    
    visitorName: string;
    visitorGender: string;
    visitorAge : number;
    visitorPhone : string;
    appointmentTime: object;


}
