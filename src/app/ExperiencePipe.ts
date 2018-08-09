import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'DoctorExperience'
})
export class ExperiencePipe implements PipeTransform{

  transform(value): string{
    return "Exp  = " + value+"Yrs" ;
  }

}
