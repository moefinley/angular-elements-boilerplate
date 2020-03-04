import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'xhr-prototype',
  template: `
    <slot (slotchange)="slotChange($event)">Default heading</slot>
    <p>
      Prototype works! Hello
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class XhrPrototypeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slotChange($event: any) {
    const assigned = $event.target.assignedNodes();
    console.log(assigned);
  }
}
