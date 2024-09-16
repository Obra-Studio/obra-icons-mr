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
export type PlayProps = typeof __propDef.props;
export type PlayEvents = typeof __propDef.events;
export type PlaySlots = typeof __propDef.slots;
export default class Play extends SvelteComponentTyped<PlayProps, PlayEvents, PlaySlots> {
}
export {};
