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
export type PottedPlantProps = typeof __propDef.props;
export type PottedPlantEvents = typeof __propDef.events;
export type PottedPlantSlots = typeof __propDef.slots;
export default class PottedPlant extends SvelteComponentTyped<PottedPlantProps, PottedPlantEvents, PottedPlantSlots> {
}
export {};
