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
export type TriangleProps = typeof __propDef.props;
export type TriangleEvents = typeof __propDef.events;
export type TriangleSlots = typeof __propDef.slots;
export default class Triangle extends SvelteComponentTyped<TriangleProps, TriangleEvents, TriangleSlots> {
}
export {};
