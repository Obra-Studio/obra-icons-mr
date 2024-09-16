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
export type ClipboardTasksProps = typeof __propDef.props;
export type ClipboardTasksEvents = typeof __propDef.events;
export type ClipboardTasksSlots = typeof __propDef.slots;
export default class ClipboardTasks extends SvelteComponentTyped<ClipboardTasksProps, ClipboardTasksEvents, ClipboardTasksSlots> {
}
export {};
