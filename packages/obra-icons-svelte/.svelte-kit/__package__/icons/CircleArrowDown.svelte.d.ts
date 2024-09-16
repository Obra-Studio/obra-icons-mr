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
export type CircleArrowDownProps = typeof __propDef.props;
export type CircleArrowDownEvents = typeof __propDef.events;
export type CircleArrowDownSlots = typeof __propDef.slots;
export default class CircleArrowDown extends SvelteComponentTyped<CircleArrowDownProps, CircleArrowDownEvents, CircleArrowDownSlots> {
}
export {};
