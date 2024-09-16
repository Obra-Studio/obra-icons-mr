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
export type FilterProps = typeof __propDef.props;
export type FilterEvents = typeof __propDef.events;
export type FilterSlots = typeof __propDef.slots;
export default class Filter extends SvelteComponentTyped<FilterProps, FilterEvents, FilterSlots> {
}
export {};
