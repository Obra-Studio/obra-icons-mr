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
export type SidebarFillLeftProps = typeof __propDef.props;
export type SidebarFillLeftEvents = typeof __propDef.events;
export type SidebarFillLeftSlots = typeof __propDef.slots;
export default class SidebarFillLeft extends SvelteComponentTyped<SidebarFillLeftProps, SidebarFillLeftEvents, SidebarFillLeftSlots> {
}
export {};
