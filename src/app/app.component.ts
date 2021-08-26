import { Component, OnInit } from '@angular/core';
import { generate } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
 
}
 generate() {
  
    
    var xhr = new XMLHttpRequest();       
    xhr.open("GET", "../../assets/images/logo.png", true); 
    xhr.responseType = "blob";
    xhr.onload = function (e) {
            console.log(this.response);
            var reader = new FileReader();
            reader.onload = function(event) {
               var res = event.target.result;
               console.log(res)
            }
            var file = this.response;
            reader.readAsDataURL(file)
    };
    xhr.send()
  }