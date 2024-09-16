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
export type FastForwardEndFillProps = typeof __propDef.props;
export type FastForwardEndFillEvents = typeof __propDef.events;
export type FastForwardEndFillSlots = typeof __propDef.slots;
export default class FastForwardEndFill extends SvelteComponentTyped<FastForwardEndFillProps, FastForwardEndFillEvents, FastForwardEndFillSlots> {
}
export {};
