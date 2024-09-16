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
export type CheckboxOnProps = typeof __propDef.props;
export type CheckboxOnEvents = typeof __propDef.events;
export type CheckboxOnSlots = typeof __propDef.slots;
export default class CheckboxOn extends SvelteComponentTyped<CheckboxOnProps, CheckboxOnEvents, CheckboxOnSlots> {
}
export {};
