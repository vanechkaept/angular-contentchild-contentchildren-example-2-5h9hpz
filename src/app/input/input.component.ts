import { Component, ContentChild,  ContentChildren,    ElementRef,    OnInit, ViewContainerRef } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `
      <ng-content></ng-content>
  `,
})
export class InputComponent implements OnInit {

  @ContentChild('nameInput',{static:false}) nameVar;
  
  @ContentChild('nameInput',{static:false, read: NgModel}) nameVarAsNgModel;
  @ContentChild('nameInput',{static:false, read: ElementRef}) nameVarAsElementRef;
  @ContentChild('nameInput', {static:false, read: ViewContainerRef }) nameVarAsViewContainerRef;


  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.nameVar)


    console.log(this.nameVarAsNgModel)
    console.log(this.nameVarAsElementRef)
    console.log(this.nameVarAsViewContainerRef)

  }

}