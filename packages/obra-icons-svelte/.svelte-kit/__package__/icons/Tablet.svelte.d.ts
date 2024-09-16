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
export type TabletProps = typeof __propDef.props;
export type TabletEvents = typeof __propDef.events;
export type TabletSlots = typeof __propDef.slots;
export default class Tablet extends SvelteComponentTyped<TabletProps, TabletEvents, TabletSlots> {
}
export {};
