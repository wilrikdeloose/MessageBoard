import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MessageBoardService } from '../message-board/message-board.service';
import { Message } from './message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html'
})
export class MessageComponent {
  message: Message

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private messageService: MessageBoardService) {
      const id = Number(this.route.snapshot.paramMap.get('id'))
      this.messageService.getById(id).subscribe(message => this.message = message)
  }
}
