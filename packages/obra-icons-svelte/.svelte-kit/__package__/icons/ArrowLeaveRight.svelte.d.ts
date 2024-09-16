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
export type ArrowLeaveRightProps = typeof __propDef.props;
export type ArrowLeaveRightEvents = typeof __propDef.events;
export type ArrowLeaveRightSlots = typeof __propDef.slots;
export default class ArrowLeaveRight extends SvelteComponentTyped<ArrowLeaveRightProps, ArrowLeaveRightEvents, ArrowLeaveRightSlots> {
}
export {};
