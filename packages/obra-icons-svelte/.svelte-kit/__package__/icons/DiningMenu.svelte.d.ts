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
export type DiningMenuProps = typeof __propDef.props;
export type DiningMenuEvents = typeof __propDef.events;
export type DiningMenuSlots = typeof __propDef.slots;
export default class DiningMenu extends SvelteComponentTyped<DiningMenuProps, DiningMenuEvents, DiningMenuSlots> {
}
export {};
