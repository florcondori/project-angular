import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private title = 'Creando una App con Angular CLI';
  private letters: string[] = ['hola como estas', 'la mas bella que la bella', 'comer una manzana es jueli'];
  form: FormGroup;

  private static CustomValidator(control: AbstractControl) {
      return control.value ? null : { newValidator: false};
  }
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.fb.group({
      name: ['hola',  [
        Validators.required,
        Validators.minLength(7),
        AppComponent.CustomValidator
      ]]
    });
  }
}
