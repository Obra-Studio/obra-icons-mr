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
export type MonitoringProps = typeof __propDef.props;
export type MonitoringEvents = typeof __propDef.events;
export type MonitoringSlots = typeof __propDef.slots;
export default class Monitoring extends SvelteComponentTyped<MonitoringProps, MonitoringEvents, MonitoringSlots> {
}
export {};
