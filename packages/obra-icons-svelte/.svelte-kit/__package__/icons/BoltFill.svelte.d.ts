import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BoltFillProps = typeof __propDef.props;
export type BoltFillEvents = typeof __propDef.events;
export type BoltFillSlots = typeof __propDef.slots;
export default class BoltFill extends SvelteComponentTyped<BoltFillProps, BoltFillEvents, BoltFillSlots> {
}
export {};
