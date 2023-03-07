import { Pipe, PipeTransform } from '@angular/core';
import { predictedValues } from 'src/constants/values.constant';

@Pipe({
  name: 'quotaValue'
})
export class QuotaValuePipe implements PipeTransform {

  transform(v: any): any[] {
    return v.map((x: any) => {
      const val = Object.keys(x).find(i => predictedValues.includes(i)) as any
      return {
        value: x[val],
        detail: val
      }
    })
  }

}
