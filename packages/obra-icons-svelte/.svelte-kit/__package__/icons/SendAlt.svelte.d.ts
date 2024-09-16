import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
        strokeWidth?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SendAltProps = typeof __propDef.props;
export type SendAltEvents = typeof __propDef.events;
export type SendAltSlots = typeof __propDef.slots;
export default class SendAlt extends SvelteComponentTyped<SendAltProps, SendAltEvents, SendAltSlots> {
}
export {};
