import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css'],
})
export class MenuItemsComponent {
  @Input() receivedText: string = "";
}
