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
export type ChecklistProps = typeof __propDef.props;
export type ChecklistEvents = typeof __propDef.events;
export type ChecklistSlots = typeof __propDef.slots;
export default class Checklist extends SvelteComponentTyped<ChecklistProps, ChecklistEvents, ChecklistSlots> {
}
export {};
