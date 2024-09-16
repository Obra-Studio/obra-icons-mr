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
export type MonitoringFillProps = typeof __propDef.props;
export type MonitoringFillEvents = typeof __propDef.events;
export type MonitoringFillSlots = typeof __propDef.slots;
export default class MonitoringFill extends SvelteComponentTyped<MonitoringFillProps, MonitoringFillEvents, MonitoringFillSlots> {
}
export {};
