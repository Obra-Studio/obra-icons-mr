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
export type TrainFillProps = typeof __propDef.props;
export type TrainFillEvents = typeof __propDef.events;
export type TrainFillSlots = typeof __propDef.slots;
export default class TrainFill extends SvelteComponentTyped<TrainFillProps, TrainFillEvents, TrainFillSlots> {
}
export {};
