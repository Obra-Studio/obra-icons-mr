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
export type LayersProps = typeof __propDef.props;
export type LayersEvents = typeof __propDef.events;
export type LayersSlots = typeof __propDef.slots;
export default class Layers extends SvelteComponentTyped<LayersProps, LayersEvents, LayersSlots> {
}
export {};
