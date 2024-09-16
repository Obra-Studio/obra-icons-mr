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
export type SidebarFillRightProps = typeof __propDef.props;
export type SidebarFillRightEvents = typeof __propDef.events;
export type SidebarFillRightSlots = typeof __propDef.slots;
export default class SidebarFillRight extends SvelteComponentTyped<SidebarFillRightProps, SidebarFillRightEvents, SidebarFillRightSlots> {
}
export {};
