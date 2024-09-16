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
export type StationWagonProps = typeof __propDef.props;
export type StationWagonEvents = typeof __propDef.events;
export type StationWagonSlots = typeof __propDef.slots;
export default class StationWagon extends SvelteComponentTyped<StationWagonProps, StationWagonEvents, StationWagonSlots> {
}
export {};
