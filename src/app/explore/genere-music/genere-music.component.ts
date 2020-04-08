import { style } from '@angular/animations';
import { ScrollService } from './../../shared/services/scroll-service/scroll.service';
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
  gradientOpacity = 0.2;
  gradientExtent = 400;
  constructor(
    private paramsService: ParameterService,
    private genereMusicService: GenereMusicService,
    private activatedRoute: ActivatedRoute,
    private colorService: ColorService,
    private scrollService: ScrollService
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
    this.heading.nativeElement.style.opacity = 1;
    this.scrollService.scrollPosition$.subscribe((value) =>
      this.applyStyle(value)
    );
  }

  applyStyle(value: number) {
    value = -1 * value;
    const scrollPosition = `translateY(${value - value / 2}px)`;
    const opacity = 1 - value / 160;
    this.gradientOpacity = 0.2 - value / 1000;
    this.gradientExtent = 400 + (value + value * 0.2);

    this.heading.nativeElement.style.transform = scrollPosition;
    this.heading.nativeElement.style.opacity = opacity;
  }
}
