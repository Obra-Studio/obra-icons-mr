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
export type FlagRightProps = typeof __propDef.props;
export type FlagRightEvents = typeof __propDef.events;
export type FlagRightSlots = typeof __propDef.slots;
export default class FlagRight extends SvelteComponentTyped<FlagRightProps, FlagRightEvents, FlagRightSlots> {
}
export {};
