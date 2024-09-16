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
export type TicketsTwoProps = typeof __propDef.props;
export type TicketsTwoEvents = typeof __propDef.events;
export type TicketsTwoSlots = typeof __propDef.slots;
export default class TicketsTwo extends SvelteComponentTyped<TicketsTwoProps, TicketsTwoEvents, TicketsTwoSlots> {
}
export {};
