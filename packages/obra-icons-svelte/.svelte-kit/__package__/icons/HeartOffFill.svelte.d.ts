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
export type HeartOffFillProps = typeof __propDef.props;
export type HeartOffFillEvents = typeof __propDef.events;
export type HeartOffFillSlots = typeof __propDef.slots;
export default class HeartOffFill extends SvelteComponentTyped<HeartOffFillProps, HeartOffFillEvents, HeartOffFillSlots> {
}
export {};
