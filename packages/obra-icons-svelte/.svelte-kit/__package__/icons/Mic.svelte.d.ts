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
export type MicProps = typeof __propDef.props;
export type MicEvents = typeof __propDef.events;
export type MicSlots = typeof __propDef.slots;
export default class Mic extends SvelteComponentTyped<MicProps, MicEvents, MicSlots> {
}
export {};
