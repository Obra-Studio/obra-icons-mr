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
export type TabletFillProps = typeof __propDef.props;
export type TabletFillEvents = typeof __propDef.events;
export type TabletFillSlots = typeof __propDef.slots;
export default class TabletFill extends SvelteComponentTyped<TabletFillProps, TabletFillEvents, TabletFillSlots> {
}
export {};
