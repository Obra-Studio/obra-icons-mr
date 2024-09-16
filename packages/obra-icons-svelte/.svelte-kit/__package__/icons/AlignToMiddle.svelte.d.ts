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
export type AlignToMiddleProps = typeof __propDef.props;
export type AlignToMiddleEvents = typeof __propDef.events;
export type AlignToMiddleSlots = typeof __propDef.slots;
export default class AlignToMiddle extends SvelteComponentTyped<AlignToMiddleProps, AlignToMiddleEvents, AlignToMiddleSlots> {
}
export {};
