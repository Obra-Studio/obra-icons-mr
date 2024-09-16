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
export type ShieldProps = typeof __propDef.props;
export type ShieldEvents = typeof __propDef.events;
export type ShieldSlots = typeof __propDef.slots;
export default class Shield extends SvelteComponentTyped<ShieldProps, ShieldEvents, ShieldSlots> {
}
export {};
