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
export type DeleteAltProps = typeof __propDef.props;
export type DeleteAltEvents = typeof __propDef.events;
export type DeleteAltSlots = typeof __propDef.slots;
export default class DeleteAlt extends SvelteComponentTyped<DeleteAltProps, DeleteAltEvents, DeleteAltSlots> {
}
export {};
