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
export type SummaryProps = typeof __propDef.props;
export type SummaryEvents = typeof __propDef.events;
export type SummarySlots = typeof __propDef.slots;
export default class Summary extends SvelteComponentTyped<SummaryProps, SummaryEvents, SummarySlots> {
}
export {};
