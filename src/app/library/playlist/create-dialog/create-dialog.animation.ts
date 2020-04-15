import {
  fadeInAnimation,
  fadeOutAnimation,
} from '../../../shared/animations/animations.animation';
import {
  transition,
  useAnimation,
  trigger,
  state,
  style,
  animate,
  group,
} from '@angular/animations';

export const dialogTrigger = trigger('dialogTrigger', [
  state(
    'void',
    style({
      transform: 'scale3d(.9,.9,1)',
      opacity: 0,
    })
  ),
  state(
    '*',
    style({
      transform: 'scale3d(1,1,1)',
      opacity: 1,
    })
  ),
  transition(
    ':enter',
    group([
      useAnimation(fadeInAnimation, { params: { duration: '200ms' } }),
      animate('200ms ease-out', style({ transform: 'scale3d(1,1,1)' })),
    ])
  ),
  transition(
    ':leave',
    group([
      useAnimation(fadeOutAnimation, { params: { duration: '150ms' } }),
      animate('150ms ease-in', style({ opacity: 0 })),
    ])
  ),
]);
