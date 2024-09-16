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
export type CompassProps = typeof __propDef.props;
export type CompassEvents = typeof __propDef.events;
export type CompassSlots = typeof __propDef.slots;
export default class Compass extends SvelteComponentTyped<CompassProps, CompassEvents, CompassSlots> {
}
export {};
