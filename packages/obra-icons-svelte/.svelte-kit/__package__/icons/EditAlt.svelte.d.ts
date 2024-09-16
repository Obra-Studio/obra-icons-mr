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
export type EditAltProps = typeof __propDef.props;
export type EditAltEvents = typeof __propDef.events;
export type EditAltSlots = typeof __propDef.slots;
export default class EditAlt extends SvelteComponentTyped<EditAltProps, EditAltEvents, EditAltSlots> {
}
export {};
