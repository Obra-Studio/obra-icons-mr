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
export type RoadSignPointRightProps = typeof __propDef.props;
export type RoadSignPointRightEvents = typeof __propDef.events;
export type RoadSignPointRightSlots = typeof __propDef.slots;
export default class RoadSignPointRight extends SvelteComponentTyped<RoadSignPointRightProps, RoadSignPointRightEvents, RoadSignPointRightSlots> {
}
export {};
