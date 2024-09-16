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
export type DeleteAltFillProps = typeof __propDef.props;
export type DeleteAltFillEvents = typeof __propDef.events;
export type DeleteAltFillSlots = typeof __propDef.slots;
export default class DeleteAltFill extends SvelteComponentTyped<DeleteAltFillProps, DeleteAltFillEvents, DeleteAltFillSlots> {
}
export {};
