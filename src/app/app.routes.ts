import { Routes } from '@angular/router';
import { ConversationListComponent } from './components/conversation-list/conversation-list.component';
import { MessageListComponent } from './components/message-list/message-list.component';

export const routes: Routes = [
    { path: '', component: ConversationListComponent },
    { path: 'conversation/:id', component: MessageListComponent },
];
