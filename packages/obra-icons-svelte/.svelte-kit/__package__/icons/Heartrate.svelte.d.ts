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
export type HeartrateProps = typeof __propDef.props;
export type HeartrateEvents = typeof __propDef.events;
export type HeartrateSlots = typeof __propDef.slots;
export default class Heartrate extends SvelteComponentTyped<HeartrateProps, HeartrateEvents, HeartrateSlots> {
}
export {};
