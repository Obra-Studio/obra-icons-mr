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
export type CircleArrowDownFillProps = typeof __propDef.props;
export type CircleArrowDownFillEvents = typeof __propDef.events;
export type CircleArrowDownFillSlots = typeof __propDef.slots;
export default class CircleArrowDownFill extends SvelteComponentTyped<CircleArrowDownFillProps, CircleArrowDownFillEvents, CircleArrowDownFillSlots> {
}
export {};
