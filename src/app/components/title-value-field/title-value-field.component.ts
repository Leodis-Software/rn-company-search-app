import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-value-field',
  standalone: true,
  imports: [],
  templateUrl: './title-value-field.component.html',
  styleUrl: './title-value-field.component.scss',
})
export class TitleValueFieldComponent {
  @Input() title!: string;
  @Input() value!: any;
  @Input() prominentTitle: boolean = false;
  @Input() prominentValue: boolean = false;
}
