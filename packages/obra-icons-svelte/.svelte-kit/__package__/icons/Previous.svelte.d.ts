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
export type PreviousProps = typeof __propDef.props;
export type PreviousEvents = typeof __propDef.events;
export type PreviousSlots = typeof __propDef.slots;
export default class Previous extends SvelteComponentTyped<PreviousProps, PreviousEvents, PreviousSlots> {
}
export {};
