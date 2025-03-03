import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-list',
  imports: [
    CommonModule,
    MatListModule
  ],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss'
})
export class MessageListComponent {
  messages: any[] = [];
  conversationId: string | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.conversationId = this.route.snapshot.paramMap.get('id');
    if (this.conversationId) {
      this.apiService.getMessages(this.conversationId).subscribe(
        (data: any) => {
          // Verifique se a resposta é um objeto com uma propriedade 'messages'
          if (data.messages) {
            this.messages = data.messages; // Acesse a propriedade 'messages'
          } else {
            this.messages = data; // Caso a resposta seja um array diretamente
          }
        },
        (error) => {
          console.error('Erro ao buscar mensagens', error);
        }
      );
    }
  }
}
