import { Observable, ObservableArray } from '@nativescript/core';
import { ITodoItem } from './todo';
import items from './assets/todo.json';

export class TodoViewModel extends Observable {
  private _items: ObservableArray<ITodoItem>;

  constructor() {
    super();

    this._items = this.load();
  }

  load(): ObservableArray<ITodoItem> {
    console.log('Model: reload items');
    return new ObservableArray([...items.todos]);
  }

  get title(): string {
    console.log('Model: get title');
    return `A list of ${this._items.length} todo items`;
  }

  get items(): ObservableArray<ITodoItem> {
    console.log('Model: get items');
    return this._items;
  }

  remove(index: number) {
    console.log(`Model: remove ${index}-th item`);
    this._items.splice(index, 1);
    this.notifyPropertyChange('title', this.title);
  }

  reset() {
    this._items = this.load();
    this.notifyPropertyChange('items', this.items);
    this.notifyPropertyChange('title', this.title);
  }
}
