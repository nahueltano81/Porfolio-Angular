import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillList:any;

  constructor(private datosporfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosporfolio.obtenerDatos().subscribe(data=>{
      this.skillList=data.skills;
    })
  }

}
