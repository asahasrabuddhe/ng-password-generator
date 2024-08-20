import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  password = '';
  useUcLetters = false;
  useLcLetters = false;
  useNumbers = false;
  useSymbols = false;
  length = 15;

  onChangeLength(event: Event) {
    const target = event.target as HTMLInputElement;
    this.length = parseInt(target.value);
  }

  onChangeUseUcLetters() {
    this.useUcLetters = !this.useLcLetters;
  }
  onChangeUseLcLetters() {
    this.useLcLetters = !this.useLcLetters;
  }
  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }
  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  onButtonClick() {
    const ucLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lcLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.useUcLetters) {
      validChars += ucLetters
    }

    if (this.useLcLetters) {
      validChars += lcLetters
    }

    if (this.useNumbers) {
      validChars += numbers
    }

    if (this.useSymbols) {
      validChars += symbols
    }

    let generatedPassword = ''

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]
    }

    this.password = generatedPassword
  }
}
