import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      des: ['', Validators.required],
      dem: ['', Validators.required],
      pasos: ['', Validators.required],
      vmemps: ['', Validators.required],
      rpempk: ['', Validators.required],
      datnm: ['', Validators.required],
      fcmelpm: ['', Validators.required],
    });
  }

  onSubmit() {
    // Lógica para manejar el envío del formulario
    const formData = this.myForm.value;

    if(Object.values(formData).some(value => value === '')){
    
      console.log('Existen datos "Maliciosos:', this.myForm.value);
    }else{

      console.log('Formulario enviado:', this.myForm.value);

    }
  }
}
