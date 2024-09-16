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
export type WeightProps = typeof __propDef.props;
export type WeightEvents = typeof __propDef.events;
export type WeightSlots = typeof __propDef.slots;
export default class Weight extends SvelteComponentTyped<WeightProps, WeightEvents, WeightSlots> {
}
export {};
