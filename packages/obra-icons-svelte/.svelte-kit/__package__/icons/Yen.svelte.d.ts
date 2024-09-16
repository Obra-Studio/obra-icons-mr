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
export type YenProps = typeof __propDef.props;
export type YenEvents = typeof __propDef.events;
export type YenSlots = typeof __propDef.slots;
export default class Yen extends SvelteComponentTyped<YenProps, YenEvents, YenSlots> {
}
export {};
