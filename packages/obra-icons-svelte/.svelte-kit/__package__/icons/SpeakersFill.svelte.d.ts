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
export type SpeakersFillProps = typeof __propDef.props;
export type SpeakersFillEvents = typeof __propDef.events;
export type SpeakersFillSlots = typeof __propDef.slots;
export default class SpeakersFill extends SvelteComponentTyped<SpeakersFillProps, SpeakersFillEvents, SpeakersFillSlots> {
}
export {};
