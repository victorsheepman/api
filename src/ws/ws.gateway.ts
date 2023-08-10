import { Socket } from 'socket.io';
import { WsService } from './ws.service';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway({ cors: true, namespace: '/bracelets' })
export class WsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly wsService: WsService) {}
  handleDisconnect(client: Socket) {
    this.wsService.registerClient(client);
  }
  handleConnection(client: Socket) {
    console.log('cliente conectado', client.id);
  }
}
