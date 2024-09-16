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
export type FaceSadProps = typeof __propDef.props;
export type FaceSadEvents = typeof __propDef.events;
export type FaceSadSlots = typeof __propDef.slots;
export default class FaceSad extends SvelteComponentTyped<FaceSadProps, FaceSadEvents, FaceSadSlots> {
}
export {};
