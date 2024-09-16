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
export type ForkLeftProps = typeof __propDef.props;
export type ForkLeftEvents = typeof __propDef.events;
export type ForkLeftSlots = typeof __propDef.slots;
export default class ForkLeft extends SvelteComponentTyped<ForkLeftProps, ForkLeftEvents, ForkLeftSlots> {
}
export {};
