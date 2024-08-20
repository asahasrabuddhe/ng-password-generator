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
  title = 'pw';
  password = '';
  useUcLetters = false;
  useLcLetters = false;
  useNumbers = false;
  useSymbols = false;

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
    this.password = "my password"
  }
}
