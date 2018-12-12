import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   @Input()  errorMsg :string ;
   @Input() displayError:boolean;
//   @Input()  errorMsg : String;
// @Input() displayError:boolean;

  constructor() { }

  ngOnInit() {
  }

}
