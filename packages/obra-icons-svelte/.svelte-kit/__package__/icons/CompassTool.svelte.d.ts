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
export type CompassToolProps = typeof __propDef.props;
export type CompassToolEvents = typeof __propDef.events;
export type CompassToolSlots = typeof __propDef.slots;
export default class CompassTool extends SvelteComponentTyped<CompassToolProps, CompassToolEvents, CompassToolSlots> {
}
export {};
