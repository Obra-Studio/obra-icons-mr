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
export type IsoProps = typeof __propDef.props;
export type IsoEvents = typeof __propDef.events;
export type IsoSlots = typeof __propDef.slots;
export default class Iso extends SvelteComponentTyped<IsoProps, IsoEvents, IsoSlots> {
}
export {};
