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
export type ArrowLeftUpProps = typeof __propDef.props;
export type ArrowLeftUpEvents = typeof __propDef.events;
export type ArrowLeftUpSlots = typeof __propDef.slots;
export default class ArrowLeftUp extends SvelteComponentTyped<ArrowLeftUpProps, ArrowLeftUpEvents, ArrowLeftUpSlots> {
}
export {};
