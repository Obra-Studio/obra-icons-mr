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
export type TrainAltFillProps = typeof __propDef.props;
export type TrainAltFillEvents = typeof __propDef.events;
export type TrainAltFillSlots = typeof __propDef.slots;
export default class TrainAltFill extends SvelteComponentTyped<TrainAltFillProps, TrainAltFillEvents, TrainAltFillSlots> {
}
export {};
