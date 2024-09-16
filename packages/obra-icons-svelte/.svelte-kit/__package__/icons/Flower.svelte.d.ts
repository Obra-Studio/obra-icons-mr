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
export type FlowerProps = typeof __propDef.props;
export type FlowerEvents = typeof __propDef.events;
export type FlowerSlots = typeof __propDef.slots;
export default class Flower extends SvelteComponentTyped<FlowerProps, FlowerEvents, FlowerSlots> {
}
export {};
