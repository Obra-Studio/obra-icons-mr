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
export type CircleAddFillProps = typeof __propDef.props;
export type CircleAddFillEvents = typeof __propDef.events;
export type CircleAddFillSlots = typeof __propDef.slots;
export default class CircleAddFill extends SvelteComponentTyped<CircleAddFillProps, CircleAddFillEvents, CircleAddFillSlots> {
}
export {};
