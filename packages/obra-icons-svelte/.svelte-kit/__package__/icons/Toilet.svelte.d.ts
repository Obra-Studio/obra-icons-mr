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
export type ToiletProps = typeof __propDef.props;
export type ToiletEvents = typeof __propDef.events;
export type ToiletSlots = typeof __propDef.slots;
export default class Toilet extends SvelteComponentTyped<ToiletProps, ToiletEvents, ToiletSlots> {
}
export {};
