import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-conversation-list',
  imports: [
    CommonModule,
    MatCardModule,
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

  // Método para abrir os detalhes da conversa
  openConversationDetails(conversationId: string): void {
    this.router.navigate(['/conversation', conversationId]);
  }
  
}
