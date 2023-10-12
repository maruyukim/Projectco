import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LastThirtyDaysExpensesComponent } from './last-thirty-days-expenses.component';

describe('LastThirtyDaysExpensesComponent', () => {
  let component: LastThirtyDaysExpensesComponent;
  let fixture: ComponentFixture<LastThirtyDaysExpensesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LastThirtyDaysExpensesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LastThirtyDaysExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
