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
export type ThreeRowsFillProps = typeof __propDef.props;
export type ThreeRowsFillEvents = typeof __propDef.events;
export type ThreeRowsFillSlots = typeof __propDef.slots;
export default class ThreeRowsFill extends SvelteComponentTyped<ThreeRowsFillProps, ThreeRowsFillEvents, ThreeRowsFillSlots> {
}
export {};
