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
export type NavigationNorthProps = typeof __propDef.props;
export type NavigationNorthEvents = typeof __propDef.events;
export type NavigationNorthSlots = typeof __propDef.slots;
export default class NavigationNorth extends SvelteComponentTyped<NavigationNorthProps, NavigationNorthEvents, NavigationNorthSlots> {
}
export {};
