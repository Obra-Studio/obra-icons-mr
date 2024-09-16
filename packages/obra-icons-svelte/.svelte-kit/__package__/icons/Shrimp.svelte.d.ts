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
export type ShrimpProps = typeof __propDef.props;
export type ShrimpEvents = typeof __propDef.events;
export type ShrimpSlots = typeof __propDef.slots;
export default class Shrimp extends SvelteComponentTyped<ShrimpProps, ShrimpEvents, ShrimpSlots> {
}
export {};
