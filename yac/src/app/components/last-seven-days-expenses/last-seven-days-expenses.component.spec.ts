import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LastSevenDaysExpensesComponent } from './last-seven-days-expenses.component';

describe('LastSevenDaysExpensesComponent', () => {
  let component: LastSevenDaysExpensesComponent;
  let fixture: ComponentFixture<LastSevenDaysExpensesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LastSevenDaysExpensesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LastSevenDaysExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
