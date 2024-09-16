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
export type FastForwardFillProps = typeof __propDef.props;
export type FastForwardFillEvents = typeof __propDef.events;
export type FastForwardFillSlots = typeof __propDef.slots;
export default class FastForwardFill extends SvelteComponentTyped<FastForwardFillProps, FastForwardFillEvents, FastForwardFillSlots> {
}
export {};
