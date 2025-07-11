import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  label = input('');
  
  buttonClicked = output() 
  
  HandleButtonClick() {

    this.buttonClicked.emit();
  }
}
