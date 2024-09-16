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
export type ArrowLeftProps = typeof __propDef.props;
export type ArrowLeftEvents = typeof __propDef.events;
export type ArrowLeftSlots = typeof __propDef.slots;
export default class ArrowLeft extends SvelteComponentTyped<ArrowLeftProps, ArrowLeftEvents, ArrowLeftSlots> {
}
export {};
