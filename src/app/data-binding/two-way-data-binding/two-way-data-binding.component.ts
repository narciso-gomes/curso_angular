import { OnInit, Component } from '@angular/core';


@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  
  v1: string = "Valor Inicial";

  v2: string;

  v3: string;

  v4: string;

  constructor() { }

  ngOnInit(): void {
    
  }

}
