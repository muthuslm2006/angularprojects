import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mbadge',
  templateUrl: './mbadge.component.html',
//  styleUrls: ['./mbadge.component.css']
})
export class MbadgeComponent {
  hidden = false;

  constructor() { }


  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  
}
