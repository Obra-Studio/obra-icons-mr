import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LockFillProps = typeof __propDef.props;
export type LockFillEvents = typeof __propDef.events;
export type LockFillSlots = typeof __propDef.slots;
export default class LockFill extends SvelteComponentTyped<LockFillProps, LockFillEvents, LockFillSlots> {
}
export {};
