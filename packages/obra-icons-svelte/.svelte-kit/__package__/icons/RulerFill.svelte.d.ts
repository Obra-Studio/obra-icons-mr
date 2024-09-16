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
export type RulerFillProps = typeof __propDef.props;
export type RulerFillEvents = typeof __propDef.events;
export type RulerFillSlots = typeof __propDef.slots;
export default class RulerFill extends SvelteComponentTyped<RulerFillProps, RulerFillEvents, RulerFillSlots> {
}
export {};
