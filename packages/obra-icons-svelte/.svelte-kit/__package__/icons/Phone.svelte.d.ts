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
export type PhoneProps = typeof __propDef.props;
export type PhoneEvents = typeof __propDef.events;
export type PhoneSlots = typeof __propDef.slots;
export default class Phone extends SvelteComponentTyped<PhoneProps, PhoneEvents, PhoneSlots> {
}
export {};
