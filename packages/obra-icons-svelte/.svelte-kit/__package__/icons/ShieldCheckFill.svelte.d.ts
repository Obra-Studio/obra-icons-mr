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
export type ShieldCheckFillProps = typeof __propDef.props;
export type ShieldCheckFillEvents = typeof __propDef.events;
export type ShieldCheckFillSlots = typeof __propDef.slots;
export default class ShieldCheckFill extends SvelteComponentTyped<ShieldCheckFillProps, ShieldCheckFillEvents, ShieldCheckFillSlots> {
}
export {};
