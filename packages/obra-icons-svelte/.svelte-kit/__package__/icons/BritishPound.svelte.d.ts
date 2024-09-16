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
export type BritishPoundProps = typeof __propDef.props;
export type BritishPoundEvents = typeof __propDef.events;
export type BritishPoundSlots = typeof __propDef.slots;
export default class BritishPound extends SvelteComponentTyped<BritishPoundProps, BritishPoundEvents, BritishPoundSlots> {
}
export {};
