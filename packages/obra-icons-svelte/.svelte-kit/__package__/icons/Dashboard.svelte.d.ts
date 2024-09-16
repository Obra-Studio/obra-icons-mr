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
export type DashboardProps = typeof __propDef.props;
export type DashboardEvents = typeof __propDef.events;
export type DashboardSlots = typeof __propDef.slots;
export default class Dashboard extends SvelteComponentTyped<DashboardProps, DashboardEvents, DashboardSlots> {
}
export {};
