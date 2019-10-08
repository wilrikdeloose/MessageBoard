import { Component, Input } from '@angular/core';
import { MessageBoardService } from '../message-board/message-board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html'
})
export class MessageEditComponent {
  
  @Input() title: string
  @Input() content: string

  constructor(private messageBoardService: MessageBoardService, private router: Router) { }

  addMessage() {
    this.messageBoardService
      .add(this.title, this.content)
      .subscribe(message =>
        this.router.navigate(['/messages/' + message.id])
      )
  }
}
