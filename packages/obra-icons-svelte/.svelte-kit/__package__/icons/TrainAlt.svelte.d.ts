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
export type TrainAltProps = typeof __propDef.props;
export type TrainAltEvents = typeof __propDef.events;
export type TrainAltSlots = typeof __propDef.slots;
export default class TrainAlt extends SvelteComponentTyped<TrainAltProps, TrainAltEvents, TrainAltSlots> {
}
export {};
