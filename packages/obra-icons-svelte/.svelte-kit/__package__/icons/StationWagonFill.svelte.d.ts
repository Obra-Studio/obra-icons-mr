import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type StationWagonFillProps = typeof __propDef.props;
export type StationWagonFillEvents = typeof __propDef.events;
export type StationWagonFillSlots = typeof __propDef.slots;
export default class StationWagonFill extends SvelteComponentTyped<StationWagonFillProps, StationWagonFillEvents, StationWagonFillSlots> {
}
export {};
