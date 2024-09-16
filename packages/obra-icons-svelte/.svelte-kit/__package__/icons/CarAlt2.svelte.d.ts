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
export type CarAlt2Props = typeof __propDef.props;
export type CarAlt2Events = typeof __propDef.events;
export type CarAlt2Slots = typeof __propDef.slots;
export default class CarAlt2 extends SvelteComponentTyped<CarAlt2Props, CarAlt2Events, CarAlt2Slots> {
}
export {};
