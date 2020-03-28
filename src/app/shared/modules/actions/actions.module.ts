import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsComponent } from './components/actions.component';
import { ActionTileComponent } from './action-tile/action-tile.component';

@NgModule({
  declarations: [ActionsComponent, ActionTileComponent],
  imports: [CommonModule],
  exports: [ActionsComponent]
})
export class ActionsModule {}
