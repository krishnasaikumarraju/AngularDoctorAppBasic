import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'DoctorFee'
})
export class FeePipe implements PipeTransform{

  transform(value): string{
    return  "Fee = "+value+"/-" ;
  }

}
