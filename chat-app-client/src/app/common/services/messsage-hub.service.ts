import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Message } from '../models/message';

const URL = 'https://localhost:5001';

@Injectable({
  providedIn: 'root',
})
export class MesssageHubService {
  constructor(private hubConnection: HubConnection) {
    this.hubConnection = new HubConnectionBuilder().withUrl(URL).build();

    this.hubConnection.start().then(() => console.log("Connection started")).catch(err => console.log("Message hub error: ", err));
  }

  openMessageListener() {
    this.hubConnection.on("ReceiveMessage", (message) => {
      console.log(message);
    });
  }
}
