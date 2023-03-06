import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ViewQuotaPageRoutingModule } from './view-quota-routing.module';
import { ViewQuotaPage } from './view-quota.page';

describe('ViewQuotaPage', () => {
  let component: ViewQuotaPage;
  let fixture: ComponentFixture<ViewQuotaPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ViewQuotaPage],
      imports: [IonicModule.forRoot(), ViewQuotaPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewQuotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
