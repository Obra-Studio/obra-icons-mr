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
export type SubtractRoundrectFillProps = typeof __propDef.props;
export type SubtractRoundrectFillEvents = typeof __propDef.events;
export type SubtractRoundrectFillSlots = typeof __propDef.slots;
export default class SubtractRoundrectFill extends SvelteComponentTyped<SubtractRoundrectFillProps, SubtractRoundrectFillEvents, SubtractRoundrectFillSlots> {
}
export {};
