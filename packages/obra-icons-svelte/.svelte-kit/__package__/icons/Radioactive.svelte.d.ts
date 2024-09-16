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
export type RadioactiveProps = typeof __propDef.props;
export type RadioactiveEvents = typeof __propDef.events;
export type RadioactiveSlots = typeof __propDef.slots;
export default class Radioactive extends SvelteComponentTyped<RadioactiveProps, RadioactiveEvents, RadioactiveSlots> {
}
export {};
