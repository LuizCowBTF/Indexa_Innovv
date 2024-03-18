import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContainerComponent,
    SeparadorComponent
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {
  contatoForm!: FormGroup;

  constructor(){
    this.contatoForm = new FormGroup({
      nome: new FormControl('LUIZ'),
      telefone: new FormControl('99 999-9999'),
      email: new FormControl('@teste.com'),
      aniversario: new FormControl('03/10/66'),
      redes: new FormControl('LinkedIn'),
      observacao: new FormControl('MUITO FRAQUINHO')
    });
  }

  salvarContato(){
    console.log(this.contatoForm.value);
  }

  cancelar(){
    console.log('Cancelada');
  }
}
