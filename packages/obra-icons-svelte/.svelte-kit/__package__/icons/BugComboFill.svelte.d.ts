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
export type BugComboFillProps = typeof __propDef.props;
export type BugComboFillEvents = typeof __propDef.events;
export type BugComboFillSlots = typeof __propDef.slots;
export default class BugComboFill extends SvelteComponentTyped<BugComboFillProps, BugComboFillEvents, BugComboFillSlots> {
}
export {};
