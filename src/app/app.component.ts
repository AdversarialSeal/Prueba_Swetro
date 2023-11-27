import { Component } from '@angular/core';
import Swal from 'sweetalert2';
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
    const desMin = 900;
    const demProm = 20000;
    const demMax = 4000;
    const pasosMax = 4000;
    const fcmelpmMax = 165;

    if (Object.values(formData).some(value => value === '')) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos, o tus actividades podrian considerarse como "Maliciosas".',
      });
    }else if(formData.des < desMin){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'La duracion promedio en segundos deberia estar por encima de los 900 segundos, esta actividad podria ser maliciosa.',
        });
        return; // Detener la ejecución del método 
    }else if(formData.dem > demProm){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'La distancia en metros promedio no deberia superar los 20000 metros, esta actividad podria ser maliciosa.',
        });
        return; // Detener la ejecución del método
    }else if(formData.dem > demMax && formData.pasos < pasosMax){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'En promedio cuando se recorre minimo una distancia de 4000 metros,la cantidad de pasos deberia estan tambien por encima de los 4000, esta actividad podria ser maliciosa.',
        });
        return; // Detener la ejecución del método
    }else if(formData.fcmelpm > fcmelpmMax){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Los indices de frecuencia cardiaca de un corredor promedio deberian rondar de los 120 a los 160, esta actividad podria ser maliciosa.',
      });
      return; // Detener la ejecución del método
    }else{
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Los datos se enviaron correctamente.',
      });
    }
  }
}
