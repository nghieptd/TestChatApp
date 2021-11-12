import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ChatBubbleComponent } from './components/chat-bubble/chat-bubble.component';

@NgModule({
  declarations: [
    ChatInputComponent,
    ChatBoxComponent,
    HomeComponent,
    ChatBubbleComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
