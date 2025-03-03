import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversation-list',
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule
   ],
  templateUrl: './conversation-list.component.html',
  styleUrl: './conversation-list.component.scss'
})
export class ConversationListComponent {
  conversations: any[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getConversations().subscribe(
      (data: any) => {
        this.conversations = data;
      },
      (error) => {
        console.error('Erro ao buscar conversas', error);
      }
    );
  }

  // Método para navegar até a lista de mensagens de uma conversa
  viewMessages(conversationId: string): void {
    this.router.navigate(['/conversation', conversationId]);
  }
  
}
