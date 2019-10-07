import { Message } from '../message/message.model'
import { HttpClient } from '@angular/common/http';

export class MessageBoardService {
    private messages: Message[] = []
    private apiUrl: string = 'http://localhost:3000'
    
    constructor(private http: HttpClient) {
        // this.add('Test 1', 'Test test test test...')
        // this.add('Test 2', 'Test test test test...')
        // this.add('Test 3', 'Test test test test...')
        // this.add('Test 4', 'Test test test test...')
        // this.add('Test 5', 'Test test test test...')
        // this.add('Test 6', 'Test test test test...')
    }

    add(title: string, content: string) {
        const id = this.messages.length
        const imgUrl = 'https://picsum.photos/id/' + id + '/640/640'
        const message = new Message(id, title, content, imgUrl) 
        
        //this.messages.push(message)
        this.http.post(this.apiUrl + '/messages', message)
        
        return message
    }
    
    getAll() {
        //return this.messages.slice()
        return this.http.get(this.apiUrl + '/messages')
    }

    getById(id: number) {
        // for (let m of this.messages) {
        //     if (m.id == id) {
        //         return m
        //     }
        // }
        // return null
        
        return this.http.get(this.apiUrl + '/messages/' + id)
    }
}