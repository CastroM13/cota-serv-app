import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { QuotaComponent } from './quota.component';

describe('QuotaComponent', () => {
  let component: QuotaComponent;
  let fixture: ComponentFixture<QuotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuotaComponent],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(QuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
