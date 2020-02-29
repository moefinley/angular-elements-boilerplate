# Sharable Angular Element boiler plate

##Step 1: Create a new Angular project named after you component
`ng new DropDownMenuComponent`

##Step 2: Add Angular Elements to the project
Make sure to add this to the parent project not the library we are about to create.

`ng add @angular/elements`

##Step 3: Create a new library to host your new component in a sharable way
`ng generate library drop-down-menu`


##Step 4: Add the code to register you custom element with the browser
The parent project will be used to test our new custom element. So we will need to initialise it in the app.component
```typescript
import {DropDownMenuComponent} from "../../projects/drop-down-menu/src/lib/drop-down-menu.component";

@NgModule({
  entryComponents: [
    DropDownMenuComponent
  ],
  declarations: [
    AppComponent,
    DropDownMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(injector: Injector) {
    let dropDownMenuElement = createCustomElement(DropDownMenuComponent, {injector});
    customElements.define('push-it', dropDownMenuElement);
  }
}
```