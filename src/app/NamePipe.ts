import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'DoctorName'
})
export class NamePipe implements PipeTransform{
  transform(value): string{
    return "Name: Dr." + value ;
  }
}
