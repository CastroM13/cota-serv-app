import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { DataService } from './services/data.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public service: DataService, private storage: Storage, public storageService: StorageService) {}

  async ngOnInit() {
    await this.storage.create();
    this.service.getDollar().subscribe(dol => this.storageService.set('dol', dol))
  }
}
