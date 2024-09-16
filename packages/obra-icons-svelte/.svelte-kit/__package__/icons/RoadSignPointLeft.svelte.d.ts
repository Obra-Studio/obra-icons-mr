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
export type RoadSignPointLeftProps = typeof __propDef.props;
export type RoadSignPointLeftEvents = typeof __propDef.events;
export type RoadSignPointLeftSlots = typeof __propDef.slots;
export default class RoadSignPointLeft extends SvelteComponentTyped<RoadSignPointLeftProps, RoadSignPointLeftEvents, RoadSignPointLeftSlots> {
}
export {};
