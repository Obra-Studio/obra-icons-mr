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
export type WarningTriangleProps = typeof __propDef.props;
export type WarningTriangleEvents = typeof __propDef.events;
export type WarningTriangleSlots = typeof __propDef.slots;
export default class WarningTriangle extends SvelteComponentTyped<WarningTriangleProps, WarningTriangleEvents, WarningTriangleSlots> {
}
export {};
