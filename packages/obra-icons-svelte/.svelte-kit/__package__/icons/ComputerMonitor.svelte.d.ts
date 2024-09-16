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
export type ComputerMonitorProps = typeof __propDef.props;
export type ComputerMonitorEvents = typeof __propDef.events;
export type ComputerMonitorSlots = typeof __propDef.slots;
export default class ComputerMonitor extends SvelteComponentTyped<ComputerMonitorProps, ComputerMonitorEvents, ComputerMonitorSlots> {
}
export {};
