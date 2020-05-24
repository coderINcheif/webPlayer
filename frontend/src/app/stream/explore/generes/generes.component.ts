import { GenereInterface } from '../../shared/interfaces/genere.interface';
import { GeneresService } from './services/generes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-generes',
  templateUrl: './generes.component.html',
  styleUrls: ['./generes.component.scss'],
})
export class GeneresComponent implements OnInit {
  generes: Array<GenereInterface>;
  constructor(private genereService: GeneresService) {}

  ngOnInit() {
    this.generes = this.genereService.generes;
  }
}
