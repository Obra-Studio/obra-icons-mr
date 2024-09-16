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
export type ComputerMonitorFillProps = typeof __propDef.props;
export type ComputerMonitorFillEvents = typeof __propDef.events;
export type ComputerMonitorFillSlots = typeof __propDef.slots;
export default class ComputerMonitorFill extends SvelteComponentTyped<ComputerMonitorFillProps, ComputerMonitorFillEvents, ComputerMonitorFillSlots> {
}
export {};
