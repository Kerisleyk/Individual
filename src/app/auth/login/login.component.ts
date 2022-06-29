import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/core/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  imagem = 'https://miro.medium.com/max/960/0*xH5iXkoyh03RflOF.jpg';
  
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(8)]],
  });

  hide = true;

  onSubmit() {
    this.toast.success('Login realizado')
  }

  constructor(
    private fb: FormBuilder,
    private toast: HotToastService,
    private authService: AuthService,
  ) { 
    
  }

  ngOnInit(): void {
  }

}
