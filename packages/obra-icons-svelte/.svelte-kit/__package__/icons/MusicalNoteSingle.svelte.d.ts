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
export type MusicalNoteSingleProps = typeof __propDef.props;
export type MusicalNoteSingleEvents = typeof __propDef.events;
export type MusicalNoteSingleSlots = typeof __propDef.slots;
export default class MusicalNoteSingle extends SvelteComponentTyped<MusicalNoteSingleProps, MusicalNoteSingleEvents, MusicalNoteSingleSlots> {
}
export {};
