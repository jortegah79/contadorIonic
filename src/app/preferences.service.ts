import { inject, Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  constructor() { }

  async saveData(key: string, value: any) {
    if (!key) return;
    Preferences.set({
      key, value
    });
  }

  async loadData(key: string) {
    const data = await Preferences.get({ key });
    return data.value;

  }

 

}
