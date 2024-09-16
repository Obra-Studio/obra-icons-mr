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
export type TaskListFillProps = typeof __propDef.props;
export type TaskListFillEvents = typeof __propDef.events;
export type TaskListFillSlots = typeof __propDef.slots;
export default class TaskListFill extends SvelteComponentTyped<TaskListFillProps, TaskListFillEvents, TaskListFillSlots> {
}
export {};
