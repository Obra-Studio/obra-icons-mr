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
export type OrangeProps = typeof __propDef.props;
export type OrangeEvents = typeof __propDef.events;
export type OrangeSlots = typeof __propDef.slots;
export default class Orange extends SvelteComponentTyped<OrangeProps, OrangeEvents, OrangeSlots> {
}
export {};
