import io from 'socket.io-client';
import createSocketIoMiddleware from 'redux-socket.io';

const socket = io('http://localhost:2999');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

export default socketIoMiddleware;