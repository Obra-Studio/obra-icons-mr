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
export type NextFillProps = typeof __propDef.props;
export type NextFillEvents = typeof __propDef.events;
export type NextFillSlots = typeof __propDef.slots;
export default class NextFill extends SvelteComponentTyped<NextFillProps, NextFillEvents, NextFillSlots> {
}
export {};
