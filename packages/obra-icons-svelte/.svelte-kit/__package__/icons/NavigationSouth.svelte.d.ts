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
export type NavigationSouthProps = typeof __propDef.props;
export type NavigationSouthEvents = typeof __propDef.events;
export type NavigationSouthSlots = typeof __propDef.slots;
export default class NavigationSouth extends SvelteComponentTyped<NavigationSouthProps, NavigationSouthEvents, NavigationSouthSlots> {
}
export {};
