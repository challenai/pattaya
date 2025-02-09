import { easeOut, mix, spring } from "motion";

const eventRenderDelayCompensation = 16;

export interface AnimationStore<T> {
  _animating: boolean;
  _current: T;
  _duration: number;
  _timestamp: number;
  _mix: any;
};

export function newAnimationStore<T>(current: T): AnimationStore<T> {
  return {
    _animating: false,
    _duration: 0,
    _timestamp: 0,
    _mix: undefined,
    _current: current,
  };
}

export function startAnimation<T>(store: AnimationStore<T>, duration: number, target: T) {
  store._animating = true;
  store._duration = duration;
  store._timestamp = 0;
  store._mix = mix(store._current, target);
}

export function updateAnimation<T>(store: AnimationStore<T>, ts: number): T {
  if (store._animating) {
    let delta = ts - store._timestamp;
    if (store._timestamp === 0) {
      delta = eventRenderDelayCompensation;
      store._timestamp = ts - eventRenderDelayCompensation;
    }
    if (delta >= store._duration) {
      store._animating = false;
    }
    // TODO: easing function types
    store._current = store._mix(easeOut(delta / store._duration));
  }
  return store._current;
}

export function animationRunning<T>(store: AnimationStore<T>) {
  return store._animating;
}

export function animationCompleted<T>(store: AnimationStore<T>) {
  return !store._animating;
}