import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceText'
})
export class SliceTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `${value.substring(0, 3)}...`;
  }

}
