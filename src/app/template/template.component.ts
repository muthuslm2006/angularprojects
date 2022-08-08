import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-template',
  templateUrl:'./template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  
  constructor(public dataServeice:DataService) { }

  ngOnInit(): void {
    
  }
  users=[{name:'muthu',age:39,gendar:'m'},
  {name:'uma',age:39,gendar:'f'},
  {name:'arjun',age:39,gendar:'m'},
  {name:'saroja',age:39,gendar:'f'},
  {name:'bas',age:39,gendar:'m'},
  
  {name:'ashok',age:39}]
incrementcount(){
  this.dataServeice.count++;
}  
}
