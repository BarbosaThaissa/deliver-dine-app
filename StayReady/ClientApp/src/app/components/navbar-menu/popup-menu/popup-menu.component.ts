import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.css']
})
export class PopupMenuComponent {
  @Output() close = new EventEmitter<void>();

  closePopup(): void {
    this.close.emit();
  }
}
