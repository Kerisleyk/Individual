import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {

  imagem = 'https://www.unitur.com.br/wp-content/uploads/2020/04/picture-2606675_1280-768x512.jpg';
  signupForm = this.fb.group(
    {
      nome: ['', [Validators.required]],
      nick: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]],
      confirma_senha: [''],
    },
  );


   constructor(
    private fb: FormBuilder,
    private toast: HotToastService
  ) {}

  onSubmit() {
          this.toast.success('Cadastro Realizado')
  }



  ngOnInit(): void { }
}
