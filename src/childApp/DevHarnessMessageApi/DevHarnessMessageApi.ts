import MessageApi from '../MessageApiBase/MessageApiBase';

interface IMessage {
  data: {
    type: string;
    payload: {
      model?: object;
      darkMode?: boolean;
      locale?: string;
      productTheme?: object;
    };
  };
}

interface IAyxAppContext {
  darkMode?: boolean;
  productTheme?: object;
  locale?: string;
}

let initRes: any;

const initialized = new Promise(res => {
  initRes = res;
});

class DevHarnessMessageApi extends MessageApi<object, object, IAyxAppContext> {
  constructor() {
    super(window);
    window.addEventListener('message', this.receiveMessage);
    this.init();
  }

  sendMessage = (type: string, data: object): void => {
    window.parent.postMessage({ type, payload: { ...data } }, window.parent.origin);
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
        initRes();
      }
    });
  };

  onReady = (): Promise<any> => {
    return initialized;
  };
}

export default DevHarnessMessageApi;
