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
export type BoxProps = typeof __propDef.props;
export type BoxEvents = typeof __propDef.events;
export type BoxSlots = typeof __propDef.slots;
export default class Box extends SvelteComponentTyped<BoxProps, BoxEvents, BoxSlots> {
}
export {};
