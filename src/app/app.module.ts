import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DraggableDirective } from './draggable.directive';
import { ZoomableDirective } from './zoomable.directive';

@NgModule({
  declarations: [
    AppComponent,
    ZoomableDirective, DraggableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
