import { ColorService } from './../shared/services/color.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GenereMusicService } from './services/genere-music.service';
import { ParameterService } from './../shared/services/parameter.service';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-explore-genere-music',
  templateUrl: './genere-music.component.html',
  styleUrls: ['./genere-music.component.scss'],
})
export class GenereMusicComponent implements AfterViewInit, OnInit {
  @ViewChild('heading', { static: true, read: ElementRef }) heading: ElementRef;

  title: string;
  color: string;
  constructor(
    private paramsService: ParameterService,
    private genereMusicService: GenereMusicService,
    private activatedRoute: ActivatedRoute,
    private colorService: ColorService
  ) {}

  ngOnInit() {
    if (this.paramsService.params) {
      this.color = this.paramsService.params.color;
    } else {
      this.color = this.colorService.getColor();
    }
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const genere = params.get('genere');
      this.title = this.genereMusicService.getTitle(genere);
    });
  }

  ngAfterViewInit() {
    // console.log(this.heading.nativeElement.offsetTop);
    // setTimeout(() => {
    //   this.heading.nativeElement.style.transform = 'translateY(30px)';
    // }, 3000);
  }
}
