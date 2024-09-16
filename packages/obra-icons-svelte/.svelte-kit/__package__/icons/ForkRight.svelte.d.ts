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
export type ForkRightProps = typeof __propDef.props;
export type ForkRightEvents = typeof __propDef.events;
export type ForkRightSlots = typeof __propDef.slots;
export default class ForkRight extends SvelteComponentTyped<ForkRightProps, ForkRightEvents, ForkRightSlots> {
}
export {};
