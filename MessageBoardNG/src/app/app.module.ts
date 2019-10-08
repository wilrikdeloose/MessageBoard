import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MessageCardComponent } from './message-card/message-card.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { MessageComponent } from './message/message.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MessageEditComponent } from './message-edit/message-edit.component';
import { MessageBoardService } from './message-board/message-board.service';

const routes: Routes = [
  { path: '', component: MessageBoardComponent },
  { path: 'messages/:id', component: MessageComponent },
  { path: 'messages/edit/:id', component: MessageEditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MessageCardComponent,
    MessageBoardComponent,
    MessageComponent,
    MenuComponent,
    FooterComponent,
    MessageEditComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MessageBoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
