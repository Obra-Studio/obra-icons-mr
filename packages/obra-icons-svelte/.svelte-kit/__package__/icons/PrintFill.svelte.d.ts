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
export type PrintFillProps = typeof __propDef.props;
export type PrintFillEvents = typeof __propDef.events;
export type PrintFillSlots = typeof __propDef.slots;
export default class PrintFill extends SvelteComponentTyped<PrintFillProps, PrintFillEvents, PrintFillSlots> {
}
export {};
