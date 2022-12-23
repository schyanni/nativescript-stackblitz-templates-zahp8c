import {
  EventData,
  GestureEventData,
  Page,
  SwipeDirection,
  SwipeGestureEventData,
} from '@nativescript/core';
import { TodoViewModel } from './todo-view-model';

let model;
let page;

export function navigatingTo(args: EventData) {
  page = <Page>args.object;

  model = new TodoViewModel();
  page.bindingContext = model;
}

export function remove(args: ItemEventData) {
  console.log('Main Page: remove');
  model.remove(args.index as number);
}

export function reload(args: SwipeGestureEventData) {
  console.log('Main Page: reload');
  if (args.direction === SwipeDirection.down) {
    model.reset();
  }
}

export function add_task(args: GestureEventData) {
  console.log('Main Page: Add Task');
  model.addtask();
}
