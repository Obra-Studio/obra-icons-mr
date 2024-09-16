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
export type ArrowRightUpProps = typeof __propDef.props;
export type ArrowRightUpEvents = typeof __propDef.events;
export type ArrowRightUpSlots = typeof __propDef.slots;
export default class ArrowRightUp extends SvelteComponentTyped<ArrowRightUpProps, ArrowRightUpEvents, ArrowRightUpSlots> {
}
export {};
