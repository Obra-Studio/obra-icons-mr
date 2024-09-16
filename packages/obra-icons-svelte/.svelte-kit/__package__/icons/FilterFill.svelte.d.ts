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
export type FilterFillProps = typeof __propDef.props;
export type FilterFillEvents = typeof __propDef.events;
export type FilterFillSlots = typeof __propDef.slots;
export default class FilterFill extends SvelteComponentTyped<FilterFillProps, FilterFillEvents, FilterFillSlots> {
}
export {};
