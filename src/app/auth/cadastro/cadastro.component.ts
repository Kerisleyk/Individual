import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  hide = true;
  user: User = {} as User

  imagem = 'https://s3.amazonaws.com/thinkific/file_uploads/220759/images/c2f/9d3/bf0/marcas2.png';

   constructor(
    private fb: FormBuilder,
    private toast: HotToastService
  ) {}

  onSubmit() {
   this.toast.success('Cadastro Realizado')
  }



  ngOnInit(): void { }
}
