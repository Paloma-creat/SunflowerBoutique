import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  // Inicialize o form com valores padrão
  form = {
    nome: '',
    sobrenome: '',
    email: '',
    cpf: '',
    telefone: '',
    contato: ''
  };

  // Variáveis para os checkboxes
  aceitouTermos: boolean = false;
  novidades: boolean = false;

  // Método para enviar o formulário
  enviarFormulario() {
    if (this.aceitouTermos) {
      alert('Formulário enviado com sucesso!');
      console.log('Dados do formulário:', this.form);
      // Aqui você pode adicionar a lógica para enviar os dados para o backend
    } else {
      alert('Você deve aceitar os termos para enviar o formulário.');
    }
  }
}