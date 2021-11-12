import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { Message } from 'src/app/common/models/message';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss']
})
export class ChatBubbleComponent implements OnInit {
  @Input() message: Message = { username: "PLACEHOLDER_USERNAME", 'content': "NO_CONTENT_FOUND"};
  @Input() isSelf: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
}
