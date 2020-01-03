import { Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public matDialogRef: MatDialogRef<ModalComponent> ) { }
  onClickOkButton(): void {
    // OKボタンが押されたときは「OK」を呼び出し元に渡す。
    this.matDialogRef.close('OK');
}
  ngOnInit() {
  }
}
