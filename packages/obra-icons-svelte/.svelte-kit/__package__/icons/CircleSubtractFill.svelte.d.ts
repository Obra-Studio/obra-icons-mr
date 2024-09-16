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
export type CircleSubtractFillProps = typeof __propDef.props;
export type CircleSubtractFillEvents = typeof __propDef.events;
export type CircleSubtractFillSlots = typeof __propDef.slots;
export default class CircleSubtractFill extends SvelteComponentTyped<CircleSubtractFillProps, CircleSubtractFillEvents, CircleSubtractFillSlots> {
}
export {};
