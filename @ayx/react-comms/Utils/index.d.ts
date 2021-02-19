import { IContext } from './types';

declare const JsEvent: (context: IContext, Event: string, item: object) => Promise<unknown>;

export default JsEvent;
