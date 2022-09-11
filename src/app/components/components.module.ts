import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserModule } from '@angular/platform-browser';

import { DemoModalServiceStaticComponent } from './demo-modal-service-static-component/demo-modal-service-static-component.component';
import { DemoModalServiceFromComponent } from './demo-modal-service-nested-component/demo-modal-service-nested-component.component';
import { NestedModalsComponent } from './nested-modals/nested-modals.component';
import { ModalContentComponent } from './demo-modal-content/modal-content.component';

@NgModule({
  declarations: [
    DemoModalServiceStaticComponent,
    DemoModalServiceFromComponent,
    NestedModalsComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [
    DemoModalServiceStaticComponent,
    DemoModalServiceFromComponent,
    NestedModalsComponent
  ]
})
export class ComponentsModule { }
