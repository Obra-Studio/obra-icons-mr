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
export type PlantProps = typeof __propDef.props;
export type PlantEvents = typeof __propDef.events;
export type PlantSlots = typeof __propDef.slots;
export default class Plant extends SvelteComponentTyped<PlantProps, PlantEvents, PlantSlots> {
}
export {};
