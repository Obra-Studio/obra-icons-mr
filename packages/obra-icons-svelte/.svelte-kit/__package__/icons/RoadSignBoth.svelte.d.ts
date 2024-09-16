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
export type RoadSignBothProps = typeof __propDef.props;
export type RoadSignBothEvents = typeof __propDef.events;
export type RoadSignBothSlots = typeof __propDef.slots;
export default class RoadSignBoth extends SvelteComponentTyped<RoadSignBothProps, RoadSignBothEvents, RoadSignBothSlots> {
}
export {};
