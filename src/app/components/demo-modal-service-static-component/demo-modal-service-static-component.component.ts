import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
 
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'demo-modal-service-static',
  templateUrl: './demo-modal-service-static-component.component.html'
})
export class DemoModalServiceStaticComponent {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}