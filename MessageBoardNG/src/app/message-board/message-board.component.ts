import { Component } from '@angular/core';
import { MessageBoardService } from './message-board.service';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent {

  constructor (private messageBoardService: MessageBoardService) { }

}
