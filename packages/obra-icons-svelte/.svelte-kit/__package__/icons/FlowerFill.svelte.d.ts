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
export type FlowerFillProps = typeof __propDef.props;
export type FlowerFillEvents = typeof __propDef.events;
export type FlowerFillSlots = typeof __propDef.slots;
export default class FlowerFill extends SvelteComponentTyped<FlowerFillProps, FlowerFillEvents, FlowerFillSlots> {
}
export {};
