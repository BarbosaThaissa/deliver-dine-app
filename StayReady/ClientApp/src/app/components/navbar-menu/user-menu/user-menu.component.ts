import { Component } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent {
  showPopup = false;

  togglePopup(): void {
    this.showPopup = !this.showPopup;
  }
}
