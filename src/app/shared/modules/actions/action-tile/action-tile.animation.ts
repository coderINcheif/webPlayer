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
  animate,
  keyframes,
} from '@angular/animations';

export let mousedownTrigger = trigger('mousedownTrigger', [
  state(
    'mousedown',
    style({
      transform: 'scale3d(.9,.9,.9)',
    })
  ),
  transition('* => mousedown', useAnimation(buttonHoldAnimation)),
  // transition('mousedown => *', useAnimation(buttonReleaseAnimation)),
  // transition(
  //   '* => mousedown',

  //   useAnimation(buttonHoldAnimation, {
  //     params: {
  //       scale: '.9',
  //       duration: `${0.75 * 0.18}s`,
  //     },
  //   })
  // ),
  transition(
    'mousedown => *',
    animate(
      `${0.75 * 0.55}s ease`,
      keyframes([
        style({ offset: 0.5, transform: 'scale3d(1.1,1.1,1)' }),
        style({ offset: 0.9, transform: 'scale3d(1,1,1)' }),
      ])
    )
    // useAnimation(buttonReleaseAnimation, {
    //   params: {
    //     scale: '1.14',
    //     duration: `${0.75 * 0.55}s`,
    //   },
    // })
  ),
]);
