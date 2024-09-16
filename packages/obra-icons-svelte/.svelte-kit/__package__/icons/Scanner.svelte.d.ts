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
export type ScannerProps = typeof __propDef.props;
export type ScannerEvents = typeof __propDef.events;
export type ScannerSlots = typeof __propDef.slots;
export default class Scanner extends SvelteComponentTyped<ScannerProps, ScannerEvents, ScannerSlots> {
}
export {};
