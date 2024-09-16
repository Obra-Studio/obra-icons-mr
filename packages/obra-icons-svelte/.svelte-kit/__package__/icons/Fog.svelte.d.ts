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
export type FogProps = typeof __propDef.props;
export type FogEvents = typeof __propDef.events;
export type FogSlots = typeof __propDef.slots;
export default class Fog extends SvelteComponentTyped<FogProps, FogEvents, FogSlots> {
}
export {};
