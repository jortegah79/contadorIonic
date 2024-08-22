import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { DisplayComponent } from 'src/app/components/display/display.component';
import { CustomButtonComponent } from "../../components/custom-button/custom-button.component";
import { addIcons } from 'ionicons';
import { add, powerOutline, refreshOutline, removeOutline } from 'ionicons/icons'
import { Actions } from 'src/app/models/actions.enum';
import { PreferencesService } from 'src/app/preferences.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.page.html',
  styleUrls: ['./contador.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, DisplayComponent, CustomButtonComponent]
})
export class ContadorPage implements OnInit {

  private preferences = inject(PreferencesService);

  lightMode: boolean = true;
  aumenta: boolean = false;
  numValue = signal<number>(0);
  number = computed<string>(() => this.numValue() < 10 ? `0${this.numValue().toString()}` : `${this.numValue().toString()}`);
  acciones = Actions;

  constructor() {
    addIcons({ add, removeOutline, refreshOutline, powerOutline });
  }
  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    const currentNumber: number = parseInt(await this.preferences.loadData('currentValue') ?? '0');
    if (currentNumber != 0) {
      this.numValue.set(currentNumber)
    }
    const lightMode: boolean = await this.preferences.loadData('lightMode') === '' ? true : false;
    this.lightMode = lightMode
  }
  doActionButton(event: Actions) {

    switch (Actions[event]) {
      case "sumar":
        this.sumar();
        break;
      case "restar":
        this.restar();
        break;
      case "reiniciar":
        this.reiniciar();
        break;
      case "lightmode":
        this.changeLightMode();
        break;
      default:
        break;
    }
  }

  sumar() {
    if (this.numValue() == 99) return;
    this.numValue.update(value => ++value);
    this.aumenta = true;
    this.preferences.saveData('currentValue', this.numValue())
  }
  restar() {
    if (this.numValue() == 0) return;
    this.numValue.update(value => --value);
    this.aumenta = false;
    this.preferences.saveData('currentValue', this.numValue())
  }
  reiniciar() {
    this.numValue.set(0);
  }
  changeLightMode() {
    this.lightMode = !this.lightMode;
    console.log(this.lightMode)
    this.preferences.saveData('lightMode', this.lightMode ? '' : 'true');

  }
}


