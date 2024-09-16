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
export type EditFillProps = typeof __propDef.props;
export type EditFillEvents = typeof __propDef.events;
export type EditFillSlots = typeof __propDef.slots;
export default class EditFill extends SvelteComponentTyped<EditFillProps, EditFillEvents, EditFillSlots> {
}
export {};
