import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SideBarComponent,
        MainComponent,
        FormComponent
      ],
      imports: [
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should contain <form component>', async(() => {
    const fixture = TestBed.createComponent(FormComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.componentInstance;
    expect(compiled).toBeTruthy();
  }));
  it('should contain <main component>', async(() => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.componentInstance;
    expect(compiled).toBeTruthy();
  }));
  it('should contain <side-bar component>', async(() => {
    const fixture = TestBed.createComponent(SideBarComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.componentInstance;
    expect(compiled).toBeTruthy();
  }));
});
