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
export type UnlockFillProps = typeof __propDef.props;
export type UnlockFillEvents = typeof __propDef.events;
export type UnlockFillSlots = typeof __propDef.slots;
export default class UnlockFill extends SvelteComponentTyped<UnlockFillProps, UnlockFillEvents, UnlockFillSlots> {
}
export {};
