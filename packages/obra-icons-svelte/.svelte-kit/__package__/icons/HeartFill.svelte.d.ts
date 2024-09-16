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
export type HeartFillProps = typeof __propDef.props;
export type HeartFillEvents = typeof __propDef.events;
export type HeartFillSlots = typeof __propDef.slots;
export default class HeartFill extends SvelteComponentTyped<HeartFillProps, HeartFillEvents, HeartFillSlots> {
}
export {};
