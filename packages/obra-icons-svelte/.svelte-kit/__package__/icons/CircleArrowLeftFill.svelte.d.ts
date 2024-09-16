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
export type CircleArrowLeftFillProps = typeof __propDef.props;
export type CircleArrowLeftFillEvents = typeof __propDef.events;
export type CircleArrowLeftFillSlots = typeof __propDef.slots;
export default class CircleArrowLeftFill extends SvelteComponentTyped<CircleArrowLeftFillProps, CircleArrowLeftFillEvents, CircleArrowLeftFillSlots> {
}
export {};
