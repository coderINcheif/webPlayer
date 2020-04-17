import {
  buttonReleaseAnimation,
  buttonHoldAnimation,
} from './../../../animations/animations.animation';
import {
  transition,
  useAnimation,
  trigger,
  state,
  style,
} from '@angular/animations';

export let mousedownTrigger = trigger('mousedownTrigger', [
  state(
    'mousedown',
    style({
      transform: 'scale3d(.9,.9,.9)',
    })
  ),
  transition('* => mousedown', useAnimation(buttonHoldAnimation)),
  transition('mousedown => *', useAnimation(buttonReleaseAnimation)),
]);
