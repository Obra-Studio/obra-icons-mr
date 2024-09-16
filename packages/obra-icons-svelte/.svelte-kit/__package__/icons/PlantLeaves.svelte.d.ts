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
export type PlantLeavesProps = typeof __propDef.props;
export type PlantLeavesEvents = typeof __propDef.events;
export type PlantLeavesSlots = typeof __propDef.slots;
export default class PlantLeaves extends SvelteComponentTyped<PlantLeavesProps, PlantLeavesEvents, PlantLeavesSlots> {
}
export {};
