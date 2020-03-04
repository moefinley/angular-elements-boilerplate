import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xhr-prototype',
  template: `
    <p>
      Prototype works! Hello
    </p>
  `,
  styles: []
})
export class XhrPrototypeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
