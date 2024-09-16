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
export type DeleteFillProps = typeof __propDef.props;
export type DeleteFillEvents = typeof __propDef.events;
export type DeleteFillSlots = typeof __propDef.slots;
export default class DeleteFill extends SvelteComponentTyped<DeleteFillProps, DeleteFillEvents, DeleteFillSlots> {
}
export {};
