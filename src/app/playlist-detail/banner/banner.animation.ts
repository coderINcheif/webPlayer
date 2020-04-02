import {
  buttonHoldAnimation,
  buttonReleaseAnimation
} from './../../shared/animations/animations.animation';

import {
  transition,
  useAnimation,
  trigger,
  state,
  style
} from '@angular/animations';

export let mousedownTrigger = trigger('mousedownTrigger', [
  state(
    'mousedown',
    style({
      transform: 'scale3d(.96,.96,.96)'
    })
  ),
  transition(
    '* => mousedown',
    useAnimation(buttonHoldAnimation, {
      params: {
        scale: '.96'
      }
    })
  ),
  transition(
    'mousedown => *',
    useAnimation(buttonReleaseAnimation, {
      params: {
        scale: '1.05'
      }
    })
  )
]);
