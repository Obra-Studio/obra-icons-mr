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
export type DeleteProps = typeof __propDef.props;
export type DeleteEvents = typeof __propDef.events;
export type DeleteSlots = typeof __propDef.slots;
export default class Delete extends SvelteComponentTyped<DeleteProps, DeleteEvents, DeleteSlots> {
}
export {};
