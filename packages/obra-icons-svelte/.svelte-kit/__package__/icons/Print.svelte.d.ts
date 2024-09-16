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
export type PrintProps = typeof __propDef.props;
export type PrintEvents = typeof __propDef.events;
export type PrintSlots = typeof __propDef.slots;
export default class Print extends SvelteComponentTyped<PrintProps, PrintEvents, PrintSlots> {
}
export {};
