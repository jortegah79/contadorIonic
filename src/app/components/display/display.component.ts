import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonLabel } from '@ionic/angular/standalone';
@Component({
  standalone: true,
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  imports: [IonLabel,CommonModule],
})
export class DisplayComponent {

  @Input({ required: true }) number: String = '00';
  @Input() borderUp:boolean=false;

  constructor() {}
}
