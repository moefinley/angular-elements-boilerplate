import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule, DoBootstrap, ApplicationRef } from '@angular/core';

import { AppComponent } from './app.component';
import {createCustomElement} from "@angular/elements";
import {XhrPrototypeComponent} from "../../projects/bop-it/src/lib/xhr-prototype.component";

@NgModule({
  entryComponents: [
    XhrPrototypeComponent
  ],
  declarations: [
    AppComponent,
    XhrPrototypeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    let xperthrPrototypeElement = createCustomElement(XhrPrototypeComponent, {injector});
    customElements.define('bop-it', xperthrPrototypeElement);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {

  }
}
