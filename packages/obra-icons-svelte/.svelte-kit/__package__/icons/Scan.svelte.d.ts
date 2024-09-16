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
export type ScanProps = typeof __propDef.props;
export type ScanEvents = typeof __propDef.events;
export type ScanSlots = typeof __propDef.slots;
export default class Scan extends SvelteComponentTyped<ScanProps, ScanEvents, ScanSlots> {
}
export {};
