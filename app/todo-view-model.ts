import { Observable, ObservableArray } from '@nativescript/core';
import { ITodoItem } from './todo';
import items from './assets/todo.json';

export class TodoViewModel extends Observable {
  private _items: ObservableArray<ITodoItem>;
  private _new_task: string;

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

  get new_task(): string {
    console.log(`Model: get new_task: '${this._new_task}'`);
    return this._new_task;
  }

  set new_task(task: string) {
    console.log(`Model: set new_task: '${task}'`);
    this._new_task = task;
    this.notifyPropertyChange('new_task', this.new_task);
  }

  remove(index: number) {
    console.log(`Model: remove ${index}-th item`);
    this._items.splice(index, 1);
    this.notifyPropertyChange('title', this.title);
  }

  reset() {
    this._items = this.load();
    this._new_task = '';
    this.notifyPropertyChange('items', this.items);
    this.notifyPropertyChange('title', this.title);
    this.notifyPropertyChange('new_task', this._new_task);
  }

  addtask() {
    console.log(`Model: add_task '${this._new_task}'`);
    const item: ITodoItem = {
      id: this._items.length + 1,
      checked: false,
      description: this._new_task,
    };

    this._items.push(item);
    this._new_task = '';
    this.notifyPropertyChange('new_task', this._new_task);
    this.notifyPropertyChange('title', this.title);
  }
}
