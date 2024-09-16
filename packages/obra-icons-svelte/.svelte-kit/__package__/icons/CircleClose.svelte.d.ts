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
export type CircleCloseProps = typeof __propDef.props;
export type CircleCloseEvents = typeof __propDef.events;
export type CircleCloseSlots = typeof __propDef.slots;
export default class CircleClose extends SvelteComponentTyped<CircleCloseProps, CircleCloseEvents, CircleCloseSlots> {
}
export {};
