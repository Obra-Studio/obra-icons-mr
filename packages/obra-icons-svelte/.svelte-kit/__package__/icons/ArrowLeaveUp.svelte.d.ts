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
export type ArrowLeaveUpProps = typeof __propDef.props;
export type ArrowLeaveUpEvents = typeof __propDef.events;
export type ArrowLeaveUpSlots = typeof __propDef.slots;
export default class ArrowLeaveUp extends SvelteComponentTyped<ArrowLeaveUpProps, ArrowLeaveUpEvents, ArrowLeaveUpSlots> {
}
export {};
