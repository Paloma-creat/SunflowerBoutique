import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from "../../service/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
 loginService = inject(LoginService)
 router= inject(Router)

  loginForm = new FormGroup ({
    nome: new FormControl("", [Validators.required]),
    senha: new FormControl("", [Validators.required]),
  })
 onAcessoLogin() {
  if (this.loginForm.invalid) {
    alert("Existem campos não preenchidos");
    return;
  }

  const { nome, senha } = this.loginForm.value;

  this.loginService.login(nome!, senha!).subscribe({
    next: () => {
      const rota = "/home";
      console.log("Redirecionando para:", `"${rota}"`);
      this.router.navigate([rota.trim()]);
    },
    error: (err) => {
      console.error("Erro ao tentar logar:", err);
        if (err.status === 401) {
        alert(err.error.message || "Usuário ou senha incorretos");
      } else if (err.status === 400) {
        alert(err.error.message || "Campos inválidos");
      } else {
        alert("Erro interno, tente novamente mais tarde");
      }
      },
    });
  }
}