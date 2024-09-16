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
export type MusicalNoteDoubleProps = typeof __propDef.props;
export type MusicalNoteDoubleEvents = typeof __propDef.events;
export type MusicalNoteDoubleSlots = typeof __propDef.slots;
export default class MusicalNoteDouble extends SvelteComponentTyped<MusicalNoteDoubleProps, MusicalNoteDoubleEvents, MusicalNoteDoubleSlots> {
}
export {};
