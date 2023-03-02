import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircleAreaPipe } from './customPipe/circle-area.pipe';
import { GenderPipe } from './customPipe/gender.pipe';
import { SquarePipe } from './customPipe/square.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CircleAreaPipe,
    GenderPipe,
    SquarePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
