import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.scss'
})
export class PrimaryButton {
  label = input('');
  
  buttonClicked = output() 
  
  HandleButtonClick() {

    this.buttonClicked.emit();
  }
}
