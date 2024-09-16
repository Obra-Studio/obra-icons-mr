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
export type MedalProps = typeof __propDef.props;
export type MedalEvents = typeof __propDef.events;
export type MedalSlots = typeof __propDef.slots;
export default class Medal extends SvelteComponentTyped<MedalProps, MedalEvents, MedalSlots> {
}
export {};
