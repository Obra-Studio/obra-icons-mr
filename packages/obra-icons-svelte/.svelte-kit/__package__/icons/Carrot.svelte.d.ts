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
export type CarrotProps = typeof __propDef.props;
export type CarrotEvents = typeof __propDef.events;
export type CarrotSlots = typeof __propDef.slots;
export default class Carrot extends SvelteComponentTyped<CarrotProps, CarrotEvents, CarrotSlots> {
}
export {};
