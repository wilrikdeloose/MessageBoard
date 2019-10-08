import { Message } from '../message/message.model'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageBoardService {
    private apiUrl: string = 'http://localhost:3000'
    
    constructor(private http: HttpClient) { }

    add(title: string, content: string): Observable<Message> {
        return this.http.post<Message>(this.apiUrl + '/messages', { "title": title, "content": content} )
    }
    
    getAll(): Observable<Message[]> {
        return this.http.get<Message[]>(this.apiUrl + '/messages')
    }

    getById(id: number): Observable<Message> {
        return this.http.get<Message>(this.apiUrl + '/messages/' + id)
    }
}