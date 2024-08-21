import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Actions } from 'src/app/models/actions.enum';
@Component({
  standalone: true,
  imports: [IonIcon, IonFabButton, IonFab, CommonModule],
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomButtonComponent {

  @Input({ required: true }) margin: number = 0;
  @Input() position: 'top' | 'bottom' = 'bottom';
  @Input({ required: true }) icon: string = '';
  @Input() action:Actions=Actions.reiniciar;
  @Output()doAction=new EventEmitter<Actions>();

  lightMode: boolean = true;
  public get tamano(): string {
    return `${this.margin}px`;
  }

  emitAction(action:Actions){
  this.doAction.emit(action);
  }
}
