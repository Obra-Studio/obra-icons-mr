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
export type TaskListProps = typeof __propDef.props;
export type TaskListEvents = typeof __propDef.events;
export type TaskListSlots = typeof __propDef.slots;
export default class TaskList extends SvelteComponentTyped<TaskListProps, TaskListEvents, TaskListSlots> {
}
export {};
