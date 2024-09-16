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
export type GasProps = typeof __propDef.props;
export type GasEvents = typeof __propDef.events;
export type GasSlots = typeof __propDef.slots;
export default class Gas extends SvelteComponentTyped<GasProps, GasEvents, GasSlots> {
}
export {};
