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
export type ExportProps = typeof __propDef.props;
export type ExportEvents = typeof __propDef.events;
export type ExportSlots = typeof __propDef.slots;
export default class Export extends SvelteComponentTyped<ExportProps, ExportEvents, ExportSlots> {
}
export {};
