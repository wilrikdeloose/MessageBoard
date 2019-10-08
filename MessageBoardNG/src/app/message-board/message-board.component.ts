import { Component } from '@angular/core';
import { MessageBoardService } from './message-board.service';
import { Message } from '../message/message.model';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent {

  messages: Message[]

  constructor (private messageBoardService: MessageBoardService) { }

  ngOnInit() {
    this.messageBoardService.getAll()
      .subscribe(messages => this.messages = messages);
  }

}
