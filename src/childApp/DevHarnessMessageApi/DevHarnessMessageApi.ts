import MessageApi from '../MessageApiBase/MessageApiBase';

interface IMessage {
  data: {
    type: string;
    payload: object;
  };
}

let initRes: any;

const initialized = new Promise(res => {
  initRes = res;
});

class DevHarnessMessageApi extends MessageApi<object, object, object> {
  constructor() {
    super(window);
    window.addEventListener('message', this.receiveMessage);
    this.init();
  }

  sendMessage = (type: string, payload: object): void => {
    window.parent.postMessage({ type, payload }, window.parent.origin);
  };

  receiveMessage = (message: IMessage): void => {
    if (this.subscriptions.has(message.data.type)) {
      this.subscriptions.get(message.data.type)(message.data.payload);
    }
  };

  init = (): void => {
    this.sendMessage('INIT', null);
    window.addEventListener('message', (message: IMessage) => {
      if (message.data.type === 'HANDSHAKE_RECEIVED') {
        this.ayxAppContext = message.data.payload;
        initRes();
      }
    });
  };

  onReady = (): Promise<any> => {
    return initialized;
  };
}

export default DevHarnessMessageApi;
