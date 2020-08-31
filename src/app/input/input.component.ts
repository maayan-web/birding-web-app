import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { IInputConfig } from './input.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
provide: NG_VALUE_ACCESSOR,
useExisting: forwardRef(() => InputComponent),
multi: true
  }]
})
export class InputComponent implements OnInit {
  @Input() config: IInputConfig;
  control = new FormControl();
public get currentValue(){
  return this.control.value;
}
  constructor() { }

  ngOnInit(): void {
  }

}
