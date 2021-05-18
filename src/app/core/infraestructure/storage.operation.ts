import { Injectable } from '@angular/core';
import { StorageRepository } from '../application/storage.repository';

@Injectable()
export class StorageOperation extends StorageRepository {
  setStorage(nameProperty: string, value: string): void {
    sessionStorage.setItem(nameProperty, value);
  }
  getStorage(nameProperty: string): string | null {
    return sessionStorage.getItem(nameProperty);
  }
  clear() {
    sessionStorage.clear();
  }
}
