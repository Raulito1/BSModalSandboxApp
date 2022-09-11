import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'modal-content',
    templateUrl: './modal-content.component.html'
})
export class ModalContentComponent implements OnInit {
    title?: string;
    closeBtnName?: string;
    list: any[] = [];

    constructor(public bsModalRef: BsModalRef) {
        console.log(this.list);
    }

    ngOnInit() {
        this.list.push('PROFIT!!!');
    }
}
