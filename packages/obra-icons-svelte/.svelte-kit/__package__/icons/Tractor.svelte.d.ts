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
export type TractorProps = typeof __propDef.props;
export type TractorEvents = typeof __propDef.events;
export type TractorSlots = typeof __propDef.slots;
export default class Tractor extends SvelteComponentTyped<TractorProps, TractorEvents, TractorSlots> {
}
export {};
