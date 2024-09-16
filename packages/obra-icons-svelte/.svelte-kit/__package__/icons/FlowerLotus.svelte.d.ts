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
export type FlowerLotusProps = typeof __propDef.props;
export type FlowerLotusEvents = typeof __propDef.events;
export type FlowerLotusSlots = typeof __propDef.slots;
export default class FlowerLotus extends SvelteComponentTyped<FlowerLotusProps, FlowerLotusEvents, FlowerLotusSlots> {
}
export {};
