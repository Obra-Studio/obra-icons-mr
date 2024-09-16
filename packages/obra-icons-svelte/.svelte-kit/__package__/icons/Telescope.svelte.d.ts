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
export type TelescopeProps = typeof __propDef.props;
export type TelescopeEvents = typeof __propDef.events;
export type TelescopeSlots = typeof __propDef.slots;
export default class Telescope extends SvelteComponentTyped<TelescopeProps, TelescopeEvents, TelescopeSlots> {
}
export {};
