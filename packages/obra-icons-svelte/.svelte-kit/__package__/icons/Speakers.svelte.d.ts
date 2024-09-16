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
export type SpeakersProps = typeof __propDef.props;
export type SpeakersEvents = typeof __propDef.events;
export type SpeakersSlots = typeof __propDef.slots;
export default class Speakers extends SvelteComponentTyped<SpeakersProps, SpeakersEvents, SpeakersSlots> {
}
export {};
