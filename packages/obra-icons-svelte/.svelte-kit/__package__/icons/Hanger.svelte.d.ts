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
export type HangerProps = typeof __propDef.props;
export type HangerEvents = typeof __propDef.events;
export type HangerSlots = typeof __propDef.slots;
export default class Hanger extends SvelteComponentTyped<HangerProps, HangerEvents, HangerSlots> {
}
export {};
