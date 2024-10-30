import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidatorService } from '../../services/validator/validator.service';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss',
})
export class SearchBoxComponent {
  @Input() searchHint: string = 'Search term';
  @Output() searchSubmitted = new EventEmitter<string>();

  constructor(private validatorService: ValidatorService) {}

  public searchForm = new FormGroup({
    searchTerm: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(20),
      this.validatorService.notNullOrEmpty(),
    ]),
  });

  public submitSearch = (searchTerm: string): boolean => {
    this.searchSubmitted.emit(searchTerm);
    return false;
  };
}
