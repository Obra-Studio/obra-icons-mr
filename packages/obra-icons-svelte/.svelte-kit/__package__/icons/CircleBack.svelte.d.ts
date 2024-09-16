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
export type CircleBackProps = typeof __propDef.props;
export type CircleBackEvents = typeof __propDef.events;
export type CircleBackSlots = typeof __propDef.slots;
export default class CircleBack extends SvelteComponentTyped<CircleBackProps, CircleBackEvents, CircleBackSlots> {
}
export {};
