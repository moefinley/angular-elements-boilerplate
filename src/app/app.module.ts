import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {createCustomElement} from "@angular/elements";
import {BopItComponent} from "../../projects/bop-it/src/lib/bop-it.component";

@NgModule({
  entryComponents: [
    BopItComponent
  ],
  declarations: [
    AppComponent,
    BopItComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(injector: Injector) {
    let pushItElement = createCustomElement(BopItComponent, {injector});
    customElements.define('push-it', pushItElement);
  }
}
