import { CategoryInterface } from '../../shared/interfaces/category.interface';
import { CardType } from 'src/app/shared/enums/card.enum';
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
  categories: Array<CategoryInterface>;
  cardType: CardType;
  gradientOpacity = 0.08;
  gradientExtent = 800;
  constructor(
    private paramsService: ParameterService,
    private genereMusicService: GenereMusicService,
    private activatedRoute: ActivatedRoute,
    private colorService: ColorService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    // getting gradient color for background
    if (this.paramsService.params) {
      this.color = this.paramsService.params.color;
    } else {
      this.color = this.colorService.getColor();
    }

    // getting data from service
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const genere = params.get('genere');
      this.title = this.genereMusicService.getTitle(genere);
      this.categories = this.genereMusicService.getItems();
      this.cardType = this.genereMusicService.getCardType();
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
    const scrollPosition = `translateY(${value - value / 3}px)`;
    const opacity = 1 - value / 600;
    this.gradientOpacity = 0.08 - value / 5000;
    this.gradientExtent = 800 + (value + value * 1.5);

    this.heading.nativeElement.style.transform = scrollPosition;
    this.heading.nativeElement.style.opacity = opacity;
  }
}
