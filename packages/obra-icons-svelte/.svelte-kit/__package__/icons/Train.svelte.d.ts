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
export type TrainProps = typeof __propDef.props;
export type TrainEvents = typeof __propDef.events;
export type TrainSlots = typeof __propDef.slots;
export default class Train extends SvelteComponentTyped<TrainProps, TrainEvents, TrainSlots> {
}
export {};
