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
export type ArrowLeftDownProps = typeof __propDef.props;
export type ArrowLeftDownEvents = typeof __propDef.events;
export type ArrowLeftDownSlots = typeof __propDef.slots;
export default class ArrowLeftDown extends SvelteComponentTyped<ArrowLeftDownProps, ArrowLeftDownEvents, ArrowLeftDownSlots> {
}
export {};
