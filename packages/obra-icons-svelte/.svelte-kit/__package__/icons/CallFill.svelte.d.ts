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
export type CallFillProps = typeof __propDef.props;
export type CallFillEvents = typeof __propDef.events;
export type CallFillSlots = typeof __propDef.slots;
export default class CallFill extends SvelteComponentTyped<CallFillProps, CallFillEvents, CallFillSlots> {
}
export {};
