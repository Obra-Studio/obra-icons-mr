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
export type CarAlt2FillProps = typeof __propDef.props;
export type CarAlt2FillEvents = typeof __propDef.events;
export type CarAlt2FillSlots = typeof __propDef.slots;
export default class CarAlt2Fill extends SvelteComponentTyped<CarAlt2FillProps, CarAlt2FillEvents, CarAlt2FillSlots> {
}
export {};
