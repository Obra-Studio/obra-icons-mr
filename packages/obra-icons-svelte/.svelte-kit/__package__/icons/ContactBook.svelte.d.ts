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
export type ContactBookProps = typeof __propDef.props;
export type ContactBookEvents = typeof __propDef.events;
export type ContactBookSlots = typeof __propDef.slots;
export default class ContactBook extends SvelteComponentTyped<ContactBookProps, ContactBookEvents, ContactBookSlots> {
}
export {};
