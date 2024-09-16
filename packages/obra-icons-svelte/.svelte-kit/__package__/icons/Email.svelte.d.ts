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
export type EmailProps = typeof __propDef.props;
export type EmailEvents = typeof __propDef.events;
export type EmailSlots = typeof __propDef.slots;
export default class Email extends SvelteComponentTyped<EmailProps, EmailEvents, EmailSlots> {
}
export {};
