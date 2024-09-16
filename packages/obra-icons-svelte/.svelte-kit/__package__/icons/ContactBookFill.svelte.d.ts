import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ContactBookFillProps = typeof __propDef.props;
export type ContactBookFillEvents = typeof __propDef.events;
export type ContactBookFillSlots = typeof __propDef.slots;
export default class ContactBookFill extends SvelteComponentTyped<ContactBookFillProps, ContactBookFillEvents, ContactBookFillSlots> {
}
export {};
