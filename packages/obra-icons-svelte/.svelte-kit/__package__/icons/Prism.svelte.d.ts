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
export type PrismProps = typeof __propDef.props;
export type PrismEvents = typeof __propDef.events;
export type PrismSlots = typeof __propDef.slots;
export default class Prism extends SvelteComponentTyped<PrismProps, PrismEvents, PrismSlots> {
}
export {};
