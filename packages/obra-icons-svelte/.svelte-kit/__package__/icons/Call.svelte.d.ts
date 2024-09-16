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
export type CallProps = typeof __propDef.props;
export type CallEvents = typeof __propDef.events;
export type CallSlots = typeof __propDef.slots;
export default class Call extends SvelteComponentTyped<CallProps, CallEvents, CallSlots> {
}
export {};
