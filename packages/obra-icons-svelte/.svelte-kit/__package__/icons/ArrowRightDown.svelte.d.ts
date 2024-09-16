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
export type ArrowRightDownProps = typeof __propDef.props;
export type ArrowRightDownEvents = typeof __propDef.events;
export type ArrowRightDownSlots = typeof __propDef.slots;
export default class ArrowRightDown extends SvelteComponentTyped<ArrowRightDownProps, ArrowRightDownEvents, ArrowRightDownSlots> {
}
export {};
