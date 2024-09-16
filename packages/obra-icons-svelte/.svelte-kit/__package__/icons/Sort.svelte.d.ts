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
export type SortProps = typeof __propDef.props;
export type SortEvents = typeof __propDef.events;
export type SortSlots = typeof __propDef.slots;
export default class Sort extends SvelteComponentTyped<SortProps, SortEvents, SortSlots> {
}
export {};
