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
export type NavigationWestProps = typeof __propDef.props;
export type NavigationWestEvents = typeof __propDef.events;
export type NavigationWestSlots = typeof __propDef.slots;
export default class NavigationWest extends SvelteComponentTyped<NavigationWestProps, NavigationWestEvents, NavigationWestSlots> {
}
export {};
