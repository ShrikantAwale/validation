import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeservice : HomeService) { }

  showArr = [];
  ngOnInit() {
    this.homeservice.getDataFromServer().subscribe(response => {
      console.log("response from server is",response);
      for(var i = 0; i < response.length; i++){
        this.showArr.push(response[i]);
      }
    
    })
  }

}
