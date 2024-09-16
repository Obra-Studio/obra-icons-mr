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
export type FlagFillProps = typeof __propDef.props;
export type FlagFillEvents = typeof __propDef.events;
export type FlagFillSlots = typeof __propDef.slots;
export default class FlagFill extends SvelteComponentTyped<FlagFillProps, FlagFillEvents, FlagFillSlots> {
}
export {};
