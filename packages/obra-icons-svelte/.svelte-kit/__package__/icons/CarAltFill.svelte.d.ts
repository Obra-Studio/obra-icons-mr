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
export type CarAltFillProps = typeof __propDef.props;
export type CarAltFillEvents = typeof __propDef.events;
export type CarAltFillSlots = typeof __propDef.slots;
export default class CarAltFill extends SvelteComponentTyped<CarAltFillProps, CarAltFillEvents, CarAltFillSlots> {
}
export {};
