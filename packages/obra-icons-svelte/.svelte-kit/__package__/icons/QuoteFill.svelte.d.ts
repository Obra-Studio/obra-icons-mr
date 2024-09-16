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
export type QuoteFillProps = typeof __propDef.props;
export type QuoteFillEvents = typeof __propDef.events;
export type QuoteFillSlots = typeof __propDef.slots;
export default class QuoteFill extends SvelteComponentTyped<QuoteFillProps, QuoteFillEvents, QuoteFillSlots> {
}
export {};
