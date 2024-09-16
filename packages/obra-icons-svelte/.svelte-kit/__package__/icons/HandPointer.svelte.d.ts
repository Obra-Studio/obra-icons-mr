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
export type HandPointerProps = typeof __propDef.props;
export type HandPointerEvents = typeof __propDef.events;
export type HandPointerSlots = typeof __propDef.slots;
export default class HandPointer extends SvelteComponentTyped<HandPointerProps, HandPointerEvents, HandPointerSlots> {
}
export {};
