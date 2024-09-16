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
export type CircleArrowUpProps = typeof __propDef.props;
export type CircleArrowUpEvents = typeof __propDef.events;
export type CircleArrowUpSlots = typeof __propDef.slots;
export default class CircleArrowUp extends SvelteComponentTyped<CircleArrowUpProps, CircleArrowUpEvents, CircleArrowUpSlots> {
}
export {};
