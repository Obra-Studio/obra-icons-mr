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
export type AdProps = typeof __propDef.props;
export type AdEvents = typeof __propDef.events;
export type AdSlots = typeof __propDef.slots;
export default class Ad extends SvelteComponentTyped<AdProps, AdEvents, AdSlots> {
}
export {};
