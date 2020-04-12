import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter',
  pure: false //só definir o pure como false para tornar um pipe em inpuro
})
export class ArrayFilterPipe implements PipeTransform {

  transform(value: any, ...args: any): any {

    if (value.length === 0 || args === undefined) {
      return value;
    }

    let filter = args.toLocaleString().toLocaleLowerCase();
    return value.filter(
      v => v.toLocaleLowerCase().indexOf(filter) != -1
    );
  
  }

}
