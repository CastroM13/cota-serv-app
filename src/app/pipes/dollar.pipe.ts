import { Pipe, PipeTransform } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Pipe({
  name: 'dollar'
})
export class DollarPipe implements PipeTransform {
  constructor(public storageService: StorageService) {

  }

  async transform(value: any): Promise<any> {
    return await this.storageService.get('dol').then(dol => {
      if (value) {
        return (value.replace('.', '').replace(',', '.') / dol).toFixed(2)
      } else {
        return dol
      }
    });
  }

}
