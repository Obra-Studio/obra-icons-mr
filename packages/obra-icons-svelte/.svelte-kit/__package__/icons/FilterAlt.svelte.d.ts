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
export type FilterAltProps = typeof __propDef.props;
export type FilterAltEvents = typeof __propDef.events;
export type FilterAltSlots = typeof __propDef.slots;
export default class FilterAlt extends SvelteComponentTyped<FilterAltProps, FilterAltEvents, FilterAltSlots> {
}
export {};
