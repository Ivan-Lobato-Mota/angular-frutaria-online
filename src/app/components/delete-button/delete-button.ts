import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  imports: [],
  templateUrl: './delete-button.html',
  styleUrl: './delete-button.scss'
})
export class DeleteButton {
  label = input('');
  
  buttonClicked = output() 
  
  HandleButtonClick() {

    this.buttonClicked.emit();
  }
}
