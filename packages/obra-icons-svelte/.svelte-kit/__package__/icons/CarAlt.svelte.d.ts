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
export type CarAltProps = typeof __propDef.props;
export type CarAltEvents = typeof __propDef.events;
export type CarAltSlots = typeof __propDef.slots;
export default class CarAlt extends SvelteComponentTyped<CarAltProps, CarAltEvents, CarAltSlots> {
}
export {};
