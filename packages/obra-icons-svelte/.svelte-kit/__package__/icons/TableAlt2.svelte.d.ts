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
export type TableAlt2Props = typeof __propDef.props;
export type TableAlt2Events = typeof __propDef.events;
export type TableAlt2Slots = typeof __propDef.slots;
export default class TableAlt2 extends SvelteComponentTyped<TableAlt2Props, TableAlt2Events, TableAlt2Slots> {
}
export {};
