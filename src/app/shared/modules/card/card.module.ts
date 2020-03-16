import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule],
  exports: [CardComponent]
})
export class CardModule {}
