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
export type RoadSignParkingFillProps = typeof __propDef.props;
export type RoadSignParkingFillEvents = typeof __propDef.events;
export type RoadSignParkingFillSlots = typeof __propDef.slots;
export default class RoadSignParkingFill extends SvelteComponentTyped<RoadSignParkingFillProps, RoadSignParkingFillEvents, RoadSignParkingFillSlots> {
}
export {};
