import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Creando una App con Angular CLI';
  letters = ['hola como estas', 'la mas bella que la bella', 'comer una manzana es jueli'];
  poem = [];
  form: FormGroup;

  private static CustomValidator(control: AbstractControl) {
    return control.value ? null : { newValidator: false};
  }

  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    this.form = this.fb.group({
      name: ['',  [
        Validators.required,
        Validators.minLength(7),
        AppComponent.CustomValidator
      ]]
    });
  }

  saveText() {
    console.log('guardando texto');
    console.log(this.form.get('name').value);
    this.poem.push(this.form.get('name').value);
  }

  showAll(e) {
    console.log('ver todo');
    console.log(this.poem.join('/'));
  }
}
