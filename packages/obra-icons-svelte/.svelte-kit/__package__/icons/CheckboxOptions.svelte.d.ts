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
export type CheckboxOptionsProps = typeof __propDef.props;
export type CheckboxOptionsEvents = typeof __propDef.events;
export type CheckboxOptionsSlots = typeof __propDef.slots;
export default class CheckboxOptions extends SvelteComponentTyped<CheckboxOptionsProps, CheckboxOptionsEvents, CheckboxOptionsSlots> {
}
export {};
