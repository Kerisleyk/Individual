import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrap'
})
export class WrapPipe implements PipeTransform {

  transform(input: string, wrap: string, ends?: string):
    string {
      if (isString(input) && !isUndefined(wrap)){
        return [wrap, input, ends || wrap].join('')
      }else {
        return input
      }
    // return isString(input) && !isUndefined(wrap) ? [wrap, input, ends || wrap].join('') : input;
  }

}
export function isUndefined(value: any): value is undefined {
  return typeof value === 'undefined'
}

export function isString(value: any): value is string {
  return typeof value === 'string';
}
