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
export type EjectProps = typeof __propDef.props;
export type EjectEvents = typeof __propDef.events;
export type EjectSlots = typeof __propDef.slots;
export default class Eject extends SvelteComponentTyped<EjectProps, EjectEvents, EjectSlots> {
}
export {};
