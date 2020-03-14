import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }
  urlImage = 'http://www.amrfrizzo.com.br/blog/wp-content/uploads/2017/07/1-1280x640.jpg';
  imgWidth = 800;

  ngOnInit(): void {
  }

  widthImage(value){
    if(value == 1){
      this.imgWidth += 40;
    }else{
      this.imgWidth -= 40;
    }
  }

}
