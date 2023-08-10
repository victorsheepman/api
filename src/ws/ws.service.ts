import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

interface connectedClients {
  [id: string]: Socket;
}

@Injectable()
export class WsService {
  private connectedClients: connectedClients = {};

  registerClient(client: Socket) {
    this.connectedClients[client.id] = client;
  }
}
