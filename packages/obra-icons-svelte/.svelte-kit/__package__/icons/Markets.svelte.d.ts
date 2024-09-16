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
export type MarketsProps = typeof __propDef.props;
export type MarketsEvents = typeof __propDef.events;
export type MarketsSlots = typeof __propDef.slots;
export default class Markets extends SvelteComponentTyped<MarketsProps, MarketsEvents, MarketsSlots> {
}
export {};
