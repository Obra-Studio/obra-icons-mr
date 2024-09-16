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
export type WrenchFillProps = typeof __propDef.props;
export type WrenchFillEvents = typeof __propDef.events;
export type WrenchFillSlots = typeof __propDef.slots;
export default class WrenchFill extends SvelteComponentTyped<WrenchFillProps, WrenchFillEvents, WrenchFillSlots> {
}
export {};
