import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MessagesComponent} from './messages/messages.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {

  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MessagesComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent,
        HeroSearchComponent
      ],
      imports: [
        AppRoutingModule,
        FormsModule
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  }));
  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Tour of Heroes'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  }));
  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Tour of Heroes!');
  }));
  it('should have links to the dashboard and to the heroes page', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const links = compiled.querySelectorAll('a');
    const texts = createElementArrayTextSeries(links);
    expect(links.length).toBe(2);
    expect(texts).toContain(`'Dashboard'`);
    expect(texts).toContain(`'Heroes'`);
  }));
  function createElementArrayTextSeries(elements){
    console.log('spork', elements);
    let textArray = [];
    elements.forEach((element) => {
      textArray.push(element.textContent);
    });
    return `'` + textArray.join(`','`) + `'`;
  }
});
