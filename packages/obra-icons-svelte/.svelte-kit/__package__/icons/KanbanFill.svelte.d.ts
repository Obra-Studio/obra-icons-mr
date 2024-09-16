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
export type KanbanFillProps = typeof __propDef.props;
export type KanbanFillEvents = typeof __propDef.events;
export type KanbanFillSlots = typeof __propDef.slots;
export default class KanbanFill extends SvelteComponentTyped<KanbanFillProps, KanbanFillEvents, KanbanFillSlots> {
}
export {};
