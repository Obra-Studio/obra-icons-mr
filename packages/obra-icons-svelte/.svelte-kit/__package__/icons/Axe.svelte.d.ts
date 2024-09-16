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
export type AxeProps = typeof __propDef.props;
export type AxeEvents = typeof __propDef.events;
export type AxeSlots = typeof __propDef.slots;
export default class Axe extends SvelteComponentTyped<AxeProps, AxeEvents, AxeSlots> {
}
export {};
