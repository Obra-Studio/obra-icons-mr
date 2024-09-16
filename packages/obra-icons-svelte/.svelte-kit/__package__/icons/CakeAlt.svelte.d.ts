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
export type CakeAltProps = typeof __propDef.props;
export type CakeAltEvents = typeof __propDef.events;
export type CakeAltSlots = typeof __propDef.slots;
export default class CakeAlt extends SvelteComponentTyped<CakeAltProps, CakeAltEvents, CakeAltSlots> {
}
export {};
