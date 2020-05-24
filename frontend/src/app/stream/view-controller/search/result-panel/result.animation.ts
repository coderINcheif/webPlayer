import {
  floatInAnimation,
  floatOutAnimation,
} from '../../../shared/animations/animations.animation';
import {
  trigger,
  style,
  state,
  animate,
  transition,
  useAnimation,
  group,
  query,
} from '@angular/animations';

export let floatOutTrigger = trigger('floatOutTrigger', [
  transition(
    ':leave',
    group([
      style({ opacity: 1 }),
      query('.results', [useAnimation(floatOutAnimation)]),
      useAnimation(floatOutAnimation),
    ])
  ),
]);

export let floatInTrigger = trigger('floatInTrigger', [
  transition(':enter', useAnimation(floatInAnimation)),
]);
