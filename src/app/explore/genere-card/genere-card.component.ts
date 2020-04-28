import { ColorService } from './../shared/services/color.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ParameterService } from './../shared/services/parameter.service';
import { GenereInterface } from './../../shared/interfaces/genere.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explore-genere-card',
  templateUrl: './genere-card.component.html',
  styleUrls: ['./genere-card.component.scss'],
})
export class GenereCardComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('genere') genere: GenereInterface;

  colors: Array<string>;
  fontColor: string;
  constructor(
    private parameterService: ParameterService,
    private routerService: Router,
    private activatedRoute: ActivatedRoute,
    private colorService: ColorService
  ) {}

  getFontColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  ngOnInit() {
    this.fontColor = this.colorService.getColor();
  }

  navigate() {
    const params = { color: this.fontColor };
    this.parameterService.params = params;
    this.routerService.navigate([this.genere.url], {
      relativeTo: this.activatedRoute,
    });
  }
}
