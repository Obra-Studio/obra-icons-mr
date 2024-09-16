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
export type ArrowLeaveDownProps = typeof __propDef.props;
export type ArrowLeaveDownEvents = typeof __propDef.events;
export type ArrowLeaveDownSlots = typeof __propDef.slots;
export default class ArrowLeaveDown extends SvelteComponentTyped<ArrowLeaveDownProps, ArrowLeaveDownEvents, ArrowLeaveDownSlots> {
}
export {};
