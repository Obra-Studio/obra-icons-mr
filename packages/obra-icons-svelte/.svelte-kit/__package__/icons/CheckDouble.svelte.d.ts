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
export type CheckDoubleProps = typeof __propDef.props;
export type CheckDoubleEvents = typeof __propDef.events;
export type CheckDoubleSlots = typeof __propDef.slots;
export default class CheckDouble extends SvelteComponentTyped<CheckDoubleProps, CheckDoubleEvents, CheckDoubleSlots> {
}
export {};
