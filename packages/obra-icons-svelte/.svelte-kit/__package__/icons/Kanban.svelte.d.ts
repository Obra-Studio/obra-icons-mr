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
export type KanbanProps = typeof __propDef.props;
export type KanbanEvents = typeof __propDef.events;
export type KanbanSlots = typeof __propDef.slots;
export default class Kanban extends SvelteComponentTyped<KanbanProps, KanbanEvents, KanbanSlots> {
}
export {};
