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
export type BanProps = typeof __propDef.props;
export type BanEvents = typeof __propDef.events;
export type BanSlots = typeof __propDef.slots;
export default class Ban extends SvelteComponentTyped<BanProps, BanEvents, BanSlots> {
}
export {};
