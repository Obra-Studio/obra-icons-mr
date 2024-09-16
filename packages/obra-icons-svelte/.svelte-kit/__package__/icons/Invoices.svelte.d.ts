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
export type InvoicesProps = typeof __propDef.props;
export type InvoicesEvents = typeof __propDef.events;
export type InvoicesSlots = typeof __propDef.slots;
export default class Invoices extends SvelteComponentTyped<InvoicesProps, InvoicesEvents, InvoicesSlots> {
}
export {};
