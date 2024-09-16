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
export type CircleArrowRightFillProps = typeof __propDef.props;
export type CircleArrowRightFillEvents = typeof __propDef.events;
export type CircleArrowRightFillSlots = typeof __propDef.slots;
export default class CircleArrowRightFill extends SvelteComponentTyped<CircleArrowRightFillProps, CircleArrowRightFillEvents, CircleArrowRightFillSlots> {
}
export {};
