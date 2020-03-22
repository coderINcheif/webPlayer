import { GeneresService } from './services/generes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-generes',
  templateUrl: './generes.component.html',
  styleUrls: ['./generes.component.scss']
})
export class GeneresComponent implements OnInit {
  generes: Array<string>;
  constructor(genereService: GeneresService) {
    this.generes = genereService.generes;
  }

  ngOnInit() {}
}
