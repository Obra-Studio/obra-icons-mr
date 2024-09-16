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
export type CircleArrowUpFillProps = typeof __propDef.props;
export type CircleArrowUpFillEvents = typeof __propDef.events;
export type CircleArrowUpFillSlots = typeof __propDef.slots;
export default class CircleArrowUpFill extends SvelteComponentTyped<CircleArrowUpFillProps, CircleArrowUpFillEvents, CircleArrowUpFillSlots> {
}
export {};
