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
export type SubtractRoundrectProps = typeof __propDef.props;
export type SubtractRoundrectEvents = typeof __propDef.events;
export type SubtractRoundrectSlots = typeof __propDef.slots;
export default class SubtractRoundrect extends SvelteComponentTyped<SubtractRoundrectProps, SubtractRoundrectEvents, SubtractRoundrectSlots> {
}
export {};
