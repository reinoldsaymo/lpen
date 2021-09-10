import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterDisplayComponent } from './core/components/counter-display/counter-display.component';
import { CalculatorComponent } from './core/components/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterDisplayComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
