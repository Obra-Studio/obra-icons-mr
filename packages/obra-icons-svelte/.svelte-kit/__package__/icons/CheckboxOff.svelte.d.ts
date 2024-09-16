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
export type CheckboxOffProps = typeof __propDef.props;
export type CheckboxOffEvents = typeof __propDef.events;
export type CheckboxOffSlots = typeof __propDef.slots;
export default class CheckboxOff extends SvelteComponentTyped<CheckboxOffProps, CheckboxOffEvents, CheckboxOffSlots> {
}
export {};
