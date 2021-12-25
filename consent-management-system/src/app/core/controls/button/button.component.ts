import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// button component
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() caption: string = '';
  @Output() onClick = new EventEmitter<any>();
  @Input() enableButton: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  click() {
    this.onClick.emit();
  }

}
