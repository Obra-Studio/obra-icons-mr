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
export type PillProps = typeof __propDef.props;
export type PillEvents = typeof __propDef.events;
export type PillSlots = typeof __propDef.slots;
export default class Pill extends SvelteComponentTyped<PillProps, PillEvents, PillSlots> {
}
export {};
