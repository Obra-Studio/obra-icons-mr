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
export type OfficeProps = typeof __propDef.props;
export type OfficeEvents = typeof __propDef.events;
export type OfficeSlots = typeof __propDef.slots;
export default class Office extends SvelteComponentTyped<OfficeProps, OfficeEvents, OfficeSlots> {
}
export {};
