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
export type TicketsOneProps = typeof __propDef.props;
export type TicketsOneEvents = typeof __propDef.events;
export type TicketsOneSlots = typeof __propDef.slots;
export default class TicketsOne extends SvelteComponentTyped<TicketsOneProps, TicketsOneEvents, TicketsOneSlots> {
}
export {};
