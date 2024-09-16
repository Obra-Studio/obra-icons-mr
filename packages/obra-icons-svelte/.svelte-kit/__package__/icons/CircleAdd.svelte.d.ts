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
export type CircleAddProps = typeof __propDef.props;
export type CircleAddEvents = typeof __propDef.events;
export type CircleAddSlots = typeof __propDef.slots;
export default class CircleAdd extends SvelteComponentTyped<CircleAddProps, CircleAddEvents, CircleAddSlots> {
}
export {};
