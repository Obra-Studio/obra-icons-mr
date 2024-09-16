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
export type PillFillProps = typeof __propDef.props;
export type PillFillEvents = typeof __propDef.events;
export type PillFillSlots = typeof __propDef.slots;
export default class PillFill extends SvelteComponentTyped<PillFillProps, PillFillEvents, PillFillSlots> {
}
export {};
