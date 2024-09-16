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
export type Equalizer2Props = typeof __propDef.props;
export type Equalizer2Events = typeof __propDef.events;
export type Equalizer2Slots = typeof __propDef.slots;
export default class Equalizer2 extends SvelteComponentTyped<Equalizer2Props, Equalizer2Events, Equalizer2Slots> {
}
export {};
