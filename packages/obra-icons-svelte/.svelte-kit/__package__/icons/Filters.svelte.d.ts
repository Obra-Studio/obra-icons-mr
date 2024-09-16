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
export type FiltersProps = typeof __propDef.props;
export type FiltersEvents = typeof __propDef.events;
export type FiltersSlots = typeof __propDef.slots;
export default class Filters extends SvelteComponentTyped<FiltersProps, FiltersEvents, FiltersSlots> {
}
export {};
