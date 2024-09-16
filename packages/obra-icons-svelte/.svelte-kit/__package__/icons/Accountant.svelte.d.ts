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
export type AccountantProps = typeof __propDef.props;
export type AccountantEvents = typeof __propDef.events;
export type AccountantSlots = typeof __propDef.slots;
export default class Accountant extends SvelteComponentTyped<AccountantProps, AccountantEvents, AccountantSlots> {
}
export {};
