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
export type AlignTextJustifiedProps = typeof __propDef.props;
export type AlignTextJustifiedEvents = typeof __propDef.events;
export type AlignTextJustifiedSlots = typeof __propDef.slots;
export default class AlignTextJustified extends SvelteComponentTyped<AlignTextJustifiedProps, AlignTextJustifiedEvents, AlignTextJustifiedSlots> {
}
export {};
