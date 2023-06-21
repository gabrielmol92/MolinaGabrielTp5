import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localExtranjero'
})
export class LocalExtranjeroPipe implements PipeTransform {

  transform(value: any): string {
    if (value === 'l') {
      return 'Local';
    } else if (value === 'e') {
      return 'Extranjero';
    } else {
      return value;
    }
  }

}
