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
export type TourBusProps = typeof __propDef.props;
export type TourBusEvents = typeof __propDef.events;
export type TourBusSlots = typeof __propDef.slots;
export default class TourBus extends SvelteComponentTyped<TourBusProps, TourBusEvents, TourBusSlots> {
}
export {};
